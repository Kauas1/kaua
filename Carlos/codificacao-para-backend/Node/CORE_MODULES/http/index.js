const http = require('node:http')
const port = 3333
console.log(http)
// Abaixo está como criar o localHost do meu servidor (o console.log é para abrir o servidor de maneira mais fácil)
const server = http.createServer((request, response) => {
    response.write('Olá, meu primeiro servidor HTTP!')
    response.end()
})

server.listen(port, () => {
    console.log(`O servidor está aberto em http://localhost:${port}`)
})

// --------------------------------------------------------------

