import { createServer } from "node:http";
const PORT = 3333
import fs from "node:fs"
import { URLSearchParams } from "node:url";
import lerDadosReceitas from "./lerReceitas";



const server = createServer((request, response) => {
    const { url, method } = request

    if (method === "GET" && url === "/receitas") {
        lerDadosReceitas((err, receitas) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "application/json" })
                response.end(JSON.stringify({ message: 'Erro ao ler os dados das receitas' }))
                return
            }
            response.writeHead(200, { "Content-Type": "application/json" })
            response.end(JSON.stringify(receitas))
        })
    } else if (method === "POST" && url === "/receitas") {
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })
        request.on('end', () => {
            if (!body) {
                response.writeHead(400, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify({ message: 'Corpo da solicitação vazio' }))
                return
            }
            const novaReceita = JSON.parse(body)
            lerDadosReceitas((err, receitas) => {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify({ message: 'Erro aa ler dados da receita' }))
                    return
                }
                novaReceita.id = receitas.length + 1
                receitas.push(novaReceita)

                fs.writeFile('receitas.json', JSON.stringify(receitas, null, 2), (err) => {
                    if (err) {
                        response.writeHead(500, { 'Content-Type': 'application/json' })
                        response.end(JSON.stringify({ message: 'Erro a cadastrar a receita no arquivo' }))
                        return
                    }
                })
                response.writeHead(201, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify({ message: 'Erro a ler dados da receita' }))
            })
        })
    }else if(method === "PUT" && url.startsWith("/receitas/")){
        const id = parseInt(url.split('/')[2])
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk
        })
        request.on('end', ()=>{
            if (!body) {
                response.writeHead(400, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify({ message: 'Corpo da solicitação vazio' }))
                return
            }
            lerDadosReceitas((err, receitas)=>{
                if(err){
                    response.writeHead(500, {'Content-Type': 'application/json'})
                    response.end(JSON.stringify({message: 'Erro a ler dados da receita'}))
                    return
                }
                const indexReceita = receitas.findIndex((receita)=> receita.id === id)

                if(indexReceita === -1){
                    response.writeHead(404, {'Content-Type': 'application/json'})
                    response.end(JSON.stringify({message: 'Receita não encontrada'}))
                    return
                }
                const receitaAtualizada = JSON.parse(body)
                receitaAtualizada.id = id
                receitas[indexReceita] = receitaAtualizada

                fs.writeFile('receitas.json', JSON.stringify(receitas, null, 2),() =>{
                    if(err){
                        response.writeHead(500, {'Content-Type': 'application/json'})
                        response.end(JSON.stringify({message: 'Não é possível atualizar a Receita'}))
                        return
                    }
                })
                response.writeHead(201, {'Content-Type': 'application/json'})
                response.end(JSON.stringify(receitaAtualizada))

            })
        })
    }else if (method === "DELETE" && url.startsWith("/receitas/")){
        
    }else if(method === "DELETE" && url.startsWith === "/receitas/"){
        const id = parseInt(url.startsWith('/')[2])
        lerDadosReceitas((err,receitas)=>{
            if(err){
                response.writeHead(500, {'Content-Type': 'application/json0'})
                response.end(JSON.stringify({message: "Erro a ler dados da receita"}))
                return // Parar a execução
            }
            const indexReceita = receitas.findIndex((receita)=> receita.id === id)
            if(indexReceita === -1){
                response.writeHead(404, {"Content-Type": "application/json"})
                response.end(JSON.stringify({message: "Receita não encontrada"}))
                return
            }

            receitas.splice(indexReceita, 1)

            fs.writeFile("receitas.json",JSON.stringify(receitas), ()=>{})


            response.end(method)

        })
    }else if(method === "GET" && url.startsWith("/busca")){
        const urlParam = new URLSearchParams(url("?")[1])
        lerDadosReceitas((err, receita)=>{
            if(err){
                response.writeHead(500, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({message: "Erro a ler dados da receita"}))
                return
            }
            const resultadoBusca = receitas.filter((receita)=> receita.nome.includes(termo)|| receita.categoria.includes(termo)|| receita.ingredientes.some()) 

        })
        response.end(method)
    }
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT:${PORT}`)
})