import http from 'node:http'
const PORT = 3333

//Métodos: GET, POST, PUT, PATH, DELETE
/** 
*  REQUISIÇÃO
*  1. Corpo da requisição (request.body) (POST)
*  2. Parâmatros de BUSCA (Search PARAMS, QUERY PARAMS) http://localhost:3333/users/2 (GET)
*  3. Parâmetros de ROTA (ROUTE PARAMS) - http://localhost:3333/users/1 (PUT, PATH, DELETE)
*/
const  users = []
const server = http.createServer((request, response) => {
    const {method, url} = request

    if(url === '/users'&& method === "GET"){ // Buscar todos os usuários
        response.setHeader('Content-Type', 'application/json') // PRECISA SER APPLICATION PARA PEGAR O JSON O TYPE É PAENAS PARA HTML ETC...
        response.end(JSON.stringify(users))// Strigify converte todos os arrays em um objeto JSON ou seja, TUDO vira String

    }else if(false){ // Buscar um único usuário

    }else if(url === '/users' && method === "POST"){ // Cadastrar um usuário
        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString()
        })
        request.on('end', () => {
            const novoUsuario = JSON.parse(body)
            novoUsuario.id = '1'
            users.push(novoUsuario)
            response.writeHead(201, {'Content-Type': 'application/json'}) // Inicializar um objeto.
            response.end(JSON.stringify(novoUsuario))
        })

    }else if(true){ // Atualizar um usuário
    
    }else if(true){ // Deletar um usuário
    
    }else{ // Recurso não encontrado

    }
})

server.listen(PORT, () => {
    console.log(`Link para abrir o servidor: http://localhost:${PORT}`)
})