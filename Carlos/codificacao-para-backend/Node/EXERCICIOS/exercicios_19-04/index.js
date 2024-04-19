const http = require('node:http')
const url = require('node:url')
const fs = require('node:fs')

const PORT = 3333

const server = http.createServer((request, response) => {

    const urlInfo = require('node:url').parse(request.url, true)
    const name = urlInfo.query.name
    const email = urlInfo.query.email
    if(!name){
        fs.readFileSync('index.html', (err, data)=> {
            response.writeHead(200, {'Concent-Type': 'text/html'})
            response.write(data)
        return response.end()
        })
    }else{
        const nameNewLine = name 
        // WriteFile = Só escrita
        // appendFile = Escreve e junta
        fs.appendFile('arquivo.json', JSON.stringify({nome:nameNewLine },null, "\t") , (err)=>{
            response.writeHead(302,{
            Location: '/'
            })
            return response.end()
        });
    }

  

    
    console.log(name)

})


server.listen(PORT, ()=>{
    console.log(`Servidor no PORT: ${PORT}`)
})