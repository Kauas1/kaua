const http = require('node:http')
const PORT = 3333

const server = http.createServer((request, response )=>{
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write("<meta charset=utf8>")
        response.write('<h1>Home Page</h1>')
        response.write('<p>Bem vindo a página inicial</p>')
        response.end()
    }else if(request.url === '/sobre'){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write("<meta charset=utf8>")
        response.write('<h1>Page about </h1>')
        response.write('<p>Bem vindo a página Sobre</p>')
        response.end()
    }else{
        response.writeHead(404, {'Content-Type': 'text/html'})
        response.write('<h1> 404 Page not found </h1>')
        response.end()
    }
}).listen(PORT, () => {
    console.log(`O servidor está aberto em http://localhost:${PORT}`)
})

