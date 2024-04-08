const http = require('node:http')
const PORT = 3333

const server = http.createServer((request, response)=> {
    const urlInfo = require('url').parse(request.url, true) // Importando a url com o nome de urlInfo
    const name = urlInfo.query.name //Estamos atribuindo a variavel tudo que atribuimos ao link, o query serve para buscar um parametro dentro do link

    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')

    if(!name){
        response.write("<meta charset=utf8>")

        response.end('<h1>Preencha o seu nome: </h1> <form method="GET"> <input type="text" name="name" /> <input type="submit" value="Enviar" /> </form>')
    }else{
        response.write("<meta charset=utf8>")
        response.end(`<h1> Seja bem vindo ${name}`)
    }
}).listen(PORT, () => {
    console.log(`Servidor no link: http://localhost:${PORT}`)
})