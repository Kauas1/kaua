const http = require('node:http')
const PORT = 3333 || 7777

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plan'})
    response.write('Hello World!')
    response.end()
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}`)
})