const http = require('node:http')
const fs = require('node:fs')
const PORT = 3333

//PROTOCOLO
// Codigos, métodos (RECEBE as informações), 
const server =  http.createServer((request, response) => {
    const urlInfo = require('node:url').parse(request.url, true)
    const name = urlInfo.query.name //Puxando as informações nome do html

    if(!name){
        fs.readFile('index.html', (err, data)=> {
            response.writeHead(200, {'Concent-Type': 'text/html'})
            response.write(data)
        return response.end()
        })
    }else{
        const nameNewLine = name + ',\r\n'
        // WriteFile = Só escrita
        // appendFile = Escreve e junta
        fs.appendFile('arquivo.txt', nameNewLine, (err)=>{
            response.writeHead(302,{
            Location: '/'
            })
            return response.end()
        })
    }

    console.log(name)
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
})