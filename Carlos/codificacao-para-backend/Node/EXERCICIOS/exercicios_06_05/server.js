import http from "http";
const PORT = 3333
import fs from "node:fs"

const server = http.createServer((require, response) => {
    const { url, method } = require
    response.setHeader = ('Acess-Control-Allow-Origin', "*")
    response.setHeader = ('Acess-Control-Allow-Methods', "GET,POST,PUT,DELETE")
    response.setHeader = ('Acess-Control-Allow-Headers', "Content-Type")
    fs.readFile("receitas.json", "utf8", (err, data) => {
        if (err) {
            response.writeHead(500, { "Content-Type": "application/json" })
            response.end(JSO.stringify({ message: "Erro interno do servidor" }))
            return
        }

        let jsonData = [];

        if (url === "/ingrediente" && method === "GET") {
            fs.readFile("receitas.json", "utf8", (err, data) => {

                if (err) {
                    response.writeHead(500, { "Content-Type": "application/json" })
                    response.end(JSON.stringify({ message: "Erro ao ler o arquivo" }))
                }

                const jsonData = JSON.parse(data)

                const ingredientes = jsonData.filter((ingrediente) => ingrediente.ingredientes
                )

                if (ingredientes.length === 0) {
                    response.writeHead(404, { "Content-Type": "application/json" })
                    response.end(
                        JSON.stringify({ message: "Não existe ingredientes" })
                    )
                    return;
                }
                response.writeHead(200, { "Content-Type": "application/json" })
                response.end(JSON.stringify(ingredientes))
            })

        } else if (url === "/receitas" && method === "GET") {
            fs.readFile("receitas.json", "utf8", (err, data) => {

                if (err) {
                    response.writeHead(500, { "Content-Type": "application/json" })
                    response.end(JSON.stringify({ message: "Erro ao ler o arquivo" }))
                }

                const jsonData = JSON.parse(data)

                const nomes = jsonData.filter((ingrediente) => ingrediente.nome
                )

                if (nomes.length === 0) {
                    response.writeHead(404, { "Content-Type": "application/json" })
                    response.end(
                        JSON.stringify({ message: "Não existe ingredientes" })
                    )
                    return;
                }
                response.writeHead(200, { "Content-Type": "application/json" })
                response.end(JSON.stringify(nomes))
            })

        } else if (url === "/categorias" && method === "GET") {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(jsonData));

        } else if (url === "/receitas" && method === "POST") {

            let body = ""
            require.on("data", (chunk) => {
                body += chunk.toString()
            })
            require.on("end", () => {
                const newItem = JSON.parse(body)

                newItem.id = jsonData.length + 1
                jsonData.push(newItem)
                fs.writeFile("receitas.json", JSON.stringify(jsonData, null, 2),
                    (err) => {
                        if (err) {

                            response.writeHead(500, { "Content-Type": "application/json" })
                            response.end(JSON.stringify({ message: "Erro interno do servidor" }))
                            return
                        }
                        response.writeHead(201, { "Content-Type": "application/json" })
                        response.end(JSON.stringify(newItem))
                    }
                )
            })
        } else if (url.startsWith("/receitas/" && method === "PUT")) {
            const id = parseInt(url.split('/')[2])

            let body = ''
            require.on('data', (chunk) => {
                body += chunk
            })
            require.on('end', () => {
                fs.readFile("receitas.json", "utf-8", (err, data) => {
                    if (err) {
                        response.writeHead(500, { "Content-Type": "application/json" })
                        response.end(({ message: "Erro ao ler o arquivo" }))
                    }
                    const jsonData = json.parse(data)
                    const indexReceita = jsonData.findIndex((receita) => receita.id === id)

                    if (indexReceita === -1) {
                        response.writeHead(404, { 'Content-Type': 'application/json' })
                        response.end(JSON.stringify({ message: 'Cartegoria não encontrada' }))
                    }
                    const receitaAtualizada = JSON.parse(body)
                    receitaAtualizada.id = id

                    jsonData[indexReceita] === receitaAtualizada

                    fs.write('receitas.json', JSON.stringify(jsonData, null, 2), (err) => {
                        if (err) {
                            response.writeHead(500, { "Content-Type": "application/json" })
                            response.end(JSON.stringify({ message: 'Erro ao ler o arquivo' }))
                        }
                        response.writeHead(200, { "Content-Type": "application/json" })
                        response.end(JSON.stringify(receitaAtualizada))

                    })
                })
            })
        } else if (url.startsWith("/receitas/" && method === "DELETE")) {
            const id = parseInt(url.split("/")[2])
            const index = jsonData.findIndex((item) => item.id === id)
            if (index !== -1) {
                jsonData.splice(index, 1)
                fs.writeFile("receitas.json", JSON.stringify(jsonData, null, 2), (err) => {
                    if (err) {
                        response.writeHead(500, { "Content-Type": "application/json" })
                        response.end(JSON.stringify({ message: "Erro interno do servidor" })
                        )
                        return
                    } else {
                        response.writeHead(200, { "Content-Type": "application/json" })
                        response.end(JSON.stringify({ message: "Receita removida com sucesso" }))
                    }
                }
                )
            } else {
                response.writeHead(404, { "Content-Type": "application/json" })
                response.end(JSON.stringify({ message: "Receita não encontrada" }))
            }
        } else if (url.startsWith('/empregados/' && method === 'GET')) {

            const receitaId = url.split('/')[2]
            const findReceita = jsonData.find(dado => dado.id == receitaId)

            if (findReceita.length == 0) {
                response.writeHead(404, { 'Content-Type': 'application/json' })
                return response.end(JSON.stringify({ message: "Receita não encontrado" }))
            } else {
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify(findReceita))
            }
        } if (url === "/cartegorias" && method === "GET") {
            fs.readFile("receitas.json", "utf8", (err, data) => {

                if (err) {
                    response.writeHead(500, { "Content-Type": "application/json" })
                    response.end(JSON.stringify({ message: "Erro ao ler o arquivo" }))
                }

                const jsonData = JSON.parse(data)

                const nomes = jsonData.filter((ingrediente) => ingrediente.nome
                )

                if (nomes.length === 0) {
                    response.writeHead(404, { "Content-Type": "application/json" })
                    response.end(
                        JSON.stringify({ message: "Não existe ingredientes" })
                    )
                    return;
                }
                response.writeHead(200, { "Content-Type": "application/json" })
                response.end(JSON.stringify(nomes))
            })



        }
    })

}
)

server.listen(PORT, () => {
    console.log(`Servidor on PORT:${PORT}`)
})