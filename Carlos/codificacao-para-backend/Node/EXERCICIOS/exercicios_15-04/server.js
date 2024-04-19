import http from "node:http"

const PORT = 3333

const users = []
const server = http.createServer((request, response) => {
    const { method, url} = request 
    if(url === "/participants" && method === "GET"){
        //Buscando TODOS os participantes(nota mental)
        response.setHeader("Content-Type", "appliication/json")
        response.end(JSON.stringify(users))
    }
    // ------------------------------------
   
    else if (url.startsWith("/participants/" && method === "GET")){
        // Buscando apenas um único participante.
        const userID = url.split("/")[2]
        const user = users.find((user) => user.id == userID)

        if (user) {
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify(user));
          } else {
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ message: "Participante não encontrado" }));
          }

    }
    // -------------------------------------
    
    else if (url === "/participants" && method === "POST" ){
        // Cadastrando o participante
        let idade 
        let body = ""
        request.on("data", (chunk) => {
            body += chunk.toString()
        })
      
        request.on("end", () => {
            const novoParticipante = JSON.parse(body)
            novoParticipante.id = users.length + 1
            users.push(novoParticipante)
            if(idade >= 16){
                response.writeHead(201, {"Content-Type": "application/json"})
                response.end(JSON.stringify(novoParticipante))
            } else if (idade <16){
                response.writeHead(404, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ message: "Participante não encontrado" }));
            }
            
        })

      
    }
    // -------------------------------------

    else if (url.startsWith("/users/") && method === "PUT"){
        // Atualizando o Participante
        const userID = url.split("/")[2]

        let body = ""
        request.on("data", (chunk) => {
            body += chunk.toString()
        })
        request.on("end", () => {
            const updateUser = JSON.parse(body)
            const index = users.findIndex((user) => user.id == userID)

            if(index !== -1){
                users[index] = { ...users[index], updateUser}
                response.writeHead("Content-Type", "application/json")
                response.end(JSON.stringify(users[index]))
            } else {
                response.writeHead(404, {"Content-Type": "application/json"})
                response.end(JSON.stringify({message: "Erro ao tentar atualizar Participante"}))
            }
        })
    }
    // ----------------------------
    else if (url.startsWith("/users/") && method === "DELETE"){
        // Deletando o Participante
        const userID = url.split("/")[2]
        const index = users.findIndex((user) => user.id == userID)

        if(index !== -1){
            users.splice(index,1)
            response.setHeader("Content-Type", "application/json")
            response.end(JSON.stringify({message:"Participante excluido"}))
        } else {
            response.writeHead(404, { "Content-Type": "application/json"})
            response.end(JSON.stringify({message: "Erro ao tentar excluir Participante"}))
        }
    }

    if(url === "/participants/count" && method === "GET"){
        //Contando todos os participantes cadastrados

        response.setHeader("Content-Type", "application/json")
        response.end(JSON.stringify(users))
    }
})
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})