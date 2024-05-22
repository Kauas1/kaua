//Paciência e uma boa prova. Que a Força esteja com você!
import { v4 as uuidv4 } from 'uuid'; //Se não souber, não precisa usar.
import http from 'node:http'
import url from 'node:url'
import fs, { writeFile } from 'node:fs'
import { format } from 'node:path';
const PORT = 3333

const server = http.createServer((req, res) => {
    const { url, method } = req
    fs.readFile("pessoas.json", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Erro interno do servidor" }));
            return;
        }

        let jsonData = []
        try {
            jsonData = JSON.parse(data)
        } catch (error) {
            console.error("Erro ao analisar JSON:", error)
        }

if (method === "GET" && url === '/pessoas') {
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(jsonData))

}else if(method === "POST" && url === '/pessoas'){

            let body = "";
            req.on("data", (chunk) => {
              body += chunk.toString();
            });
            req.on("end", () => {
              const newItem = JSON.parse(body);
              if (!newItem.hasOwnProperty('idade') || !newItem.hasOwnProperty('nome') || !newItem.hasOwnProperty('email')) {
                res.writeHead(401, { "Content-Type": "application/json" });
                res.end(
                  JSON.stringify({ message: `Não foi autorizado a criação do Usuario, está faltando informações.`})
                );
              } else {
                  newItem.id = jsonData.length + 1; // Gerar um novo ID
                  jsonData.push(newItem);
                  fs.writeFile(
                    "pessoas.json",
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
            });

} else if (method === "GET" && url.startsWith('/pessoas/')){
    
    const usuarioId = url.split('/')[2]
    const findUsuario = jsonData.find(usuario => usuario.id == usuarioId)

    if(findUsuario.length == 0){
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: "Usuario não encontrado."}))
    }else{
        res.setHeader('Content-Type', 'applicaiton/json')
        res.end(JSON.stringify(findUsuario))
        return
    }
}else if (method === "POST" && url === "/endereco"){
    
    
    const {id, rua, numero, cidade, estado, cep} = jsonData

    if (!rua || !numero || !cidade || !estado || !cep) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            error:
              "Todos os campos são obrigatórios: nome, bio, Imagem do Perfil",
          })
        );
        console.log(jsonData)
        
      }
  
    
    if(err){
        res.writeHead(500, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message: "Erro ao ler o arquivo"}))
        return
    }

    const indexUsuario = jsonData.findIndex((usuario) => usuario.id === id[0])

    if(indexUsuario === -1){
        res.writeHead(400, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message: "Faça o cadastro antes de criar um perfil"}))
        return
    }
        const endereco = {
            rua: rua[0],
            numero: numero[0],
            cidade: cidade[0],
            estado: estado[0],
            cep: cep[0],
        } 

        jsonData[indexUsuario] = { ...jsonData[indexUsuario], endereco}

        fs.writeFile("pessoas.json", JSON.stringify(jsonData, null, 2), (err)=>{
            if(err){
                res.writeHead(500, {"Content-Type": "application/json"})
                res.end(JSON.stringify({message: "Não é possivel escrever no arquivo JSON"}))
                return
            }

            res.writeHead(201, {"Content-Type": "application/json"})
            res.end(JSON.stringify({message: "endereco colocado"}))
        })
   
}else{
    res.writeHead(404, {"Content-Type": "application/json"})
    res.end(JSON.stringify({message: "Página não encontrada"}))
}

    

    })
})


server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT}`)
})