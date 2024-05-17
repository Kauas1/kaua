import http from "http";
import { URLSearchParams } from 'url';
import fs from "fs";
const model = {
  "nome": "José Maria",
  "cargo": "Professor",
  "cpf": "123.456.789-00",
  "email": "joseMaria@example.com",
  "telefone": "(12) 93456-7890",
  "data_contratacao": "2022-01-10",
  "salario": 4500,
  "habilidades": ["Front-End", "Back-End", "Docker", "SQL"],
  "idade": 18,
  "senha": "123456",
  "confirmaSenha": "123456"
}

const PORT = 8080;

const server = http.createServer((req, res) => {
  const { url, method } = req;
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  fs.readFile("funcionarios.json", "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Erro interno do servidor" }));
      return;
    }

    let jsonData = [];
    try {
      jsonData = JSON.parse(data);
    } catch (error) {
      console.error("Erro ao analisar JSON:", error);
    }

    if (url === "/empregados" && method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(jsonData));
    } else if (url === "/empregados" && method === "POST") {

      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const newItem = JSON.parse(body);
        if (!newItem.hasOwnProperty('idade') || !newItem.hasOwnProperty('nome') || !newItem.hasOwnProperty('cargo') || !newItem.hasOwnProperty('cpf') || !newItem.hasOwnProperty('senha') || !newItem.hasOwnProperty('confirmaSenha') || !newItem.hasOwnProperty('email') || !newItem.hasOwnProperty('telefone') || !newItem.hasOwnProperty('data_contratacao') || !newItem.hasOwnProperty('salario') || !newItem.hasOwnProperty('habilidades')) {
          res.writeHead(401, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ message: `Não foi autorizado a criação do empregado, está faltando informações, siga o modelo:`, modelo: model })
          );
        } else {
          if (newItem.idade < 18) {
            res.writeHead(401, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({ message: "Não foi autorizado! Precisa ser maior de 18 anos!" })
            );
          } else if (newItem.senha !== newItem.confirmaSenha) {
            res.writeHead(401, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({ message: "Não foi autorizado! As senhas não condizem" })
            );
          } else {
            newItem.id = jsonData.length + 1; // Gerar um novo ID
            jsonData.push(newItem);
            fs.writeFile(
              "funcionarios.json",
              JSON.stringify(jsonData, null, 2),
              (err) => {
                if (err) {
                  res.writeHead(500, { "Content-Type": "application/json" });
                  res.end(
                    JSON.stringify({ message: "Erro interno do servidor" })
                  );
                  return;
                }
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newItem));
              }
            );
          }
        }
      });
    } else if (url.startsWith("/empregados/") && method === "PUT") {
      const id = parseInt(url.split('/')[2])

      let body = ''
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        fs.readFile("funcionarios.json", "utf8", (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "application/json" })
            res.end(({ message: "Erro ao ler o arquivo" }))
          }

          const jsonData = JSON.parse(data)
          const indexFuncionario = jsonData.findIndex((funcionario) => funcionario.id === id)

          if (indexFuncionario === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Funcionário não encontrado!' }))
          }

          const funcionarioAtualizado = JSON.parse(body)
          funcionarioAtualizado.id = id

          jsonData[indexFuncionario] === funcionarioAtualizado

          fs.write('funcionarios.json', JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ message: 'Erro ao ler o arquivo' }))
            }
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(funcionarioAtualizado))
          })
        })
      })

    } else if (url.startsWith("/empregados/") && method === "DELETE") {

      const id = parseInt(url.split("/")[2]);
      const index = jsonData.findIndex((item) => item.id === id);
      if (index !== -1) {
        jsonData.splice(index, 1);
        fs.writeFile(
          "funcionarios.json",
          JSON.stringify(jsonData, null, 2),
          (err) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({ message: "Erro interno do servidor" })
              );
              return;
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
              JSON.stringify({ message: "Empregado removido com sucesso" })
            );
          }
        );
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Livro não encontrado" }));
      }
    } else if (method === 'GET' && url === ('/empregados/count/')) {
      const lengthPart = jsonData.length
      if (lengthPart === 0) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: "Não foi encontrado participantes registrados" }))
      } else {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: `Existem ${lengthPart} participantes cadastrados!`, value: `${lengthPart}` }))
      }

    } else if (method === 'GET' && url.startsWith('/empregados/porCargo/')) {
      const empregadoCargo = url.split('/')[3]
      const findEmploy = jsonData.filter(dado => dado.cargo == empregadoCargo)

      if (findEmploy.length == 0) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ message: "Empregado não encontrado, espero ter ajudado" }))
      } else {
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify(findEmploy))
      }
    } else if (method === 'GET' && url.startsWith('/empregados/porHabilidade/')) {

      const habilidade = url.split('/')[3]
      fs.readFile("funcionarios.json", "utf8", (err, data) => {

        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" })
          res.end(JSON.stringify({ message: "Erro ao ler o arquivo" }))
        }

        const jsonData = JSON.parse(data)

        const funcionariosPorHabilidade = jsonData.filter((funcionario) => funcionario.habilidades.includes(habilidade)
        )

        if (funcionariosPorHabilidade.length === 0) {
          res.writeHead(404, { "Content-Type": "application/json" })
          res.end(
            JSON.stringify({ message: "Não existe funcionario com essa habilidade" })
          )
          return;
        }
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(funcionariosPorHabilidade))
      })



    } else if (method === 'GET' && url.startsWith('/empregados/porFaixaSalarial/')) {
      /* Requisições
         body -> JSON -> POST
         ROUTE PARAM -> porHabilidade/ValorEnviado ->  PUT, DELETE, PATH, GET
         Query PARAM -> porFaixaSalarial?valor1=10&valor2=20
      */
      const urlParams = new URLSearchParams(url.split('?')[1])
      const minSalario = urlParams.get("minSalario")
      const maxSalario = urlParams.get("maxSalario")

      fs.readFile("funcionarios.json", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "application/json" })
          res.end(JSON.stringify({ message: "Erro ao ler o arquivo" }))
        }

        const jsonData = JSON.parse(data)
        const funcionarioPorFaixaSalarial = jsonData.filter((funcionario) => funcionario.salario >= minSalario && funcionario.salario <= maxSalario
        )
        if (funcionarioPorFaixaSalarial.length === 0) {
          res.writeHead(404, { "Content-Type": "application/json" })
          res.end(
            JSON.stringify({ message: "Não existe funcionario com essa faixa salarial" })
          )
          return
        }
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(funcionarioPorFaixaSalarial))

      })


    } else if (method === 'GET' && url.startsWith('/empregados/')) {

      const empregadoId = url.split('/')[2]
      const findEmploy = jsonData.find(dado => dado.id == empregadoId)

      if (findEmploy.length == 0) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ message: "Empregado não encontrado, espero ter ajudado" }))
      } else {
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify(findEmploy))
      }
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Rota não encontrada" }));
    }

  });
});

server.listen(PORT, () => {
  console.log(`Servidor on PORT:${PORT}🚀`);
});