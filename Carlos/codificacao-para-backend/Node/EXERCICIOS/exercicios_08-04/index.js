/*01 - Trabalhando com rotas
Expanda o servidor HTTP criado na atividade anterior para lidar com diferentes rotas.
Implemente uma rota "/home" que responda com a mensagem "Bem-vindo à página inicial!".
Implemente uma rota "/about" que responda com a mensagem "Sobre nós: somos uma empresa dedicada a...".*/

// ATIVIDADE ABAIXO

// const http = require('node:http')
// const PORT = 3333

// const server = http.createServer((request, response )=>{
//     if(request.url === '/' || request.url === '/home'){
//         response.writeHead(200, {'Content-Type': 'text/html'})
//         response.write("<meta charset=utf8>")
//         response.write('<h1>Home Page</h1>')
//         response.write('<p>Bem vindo a página inicial</p>')
//         response.end()
//     }else if(request.url === '/about'){
//         response.writeHead(200, {'Content-Type': 'text/html'})
//         response.write("<meta charset=utf8>")
//         response.write('<h1>Page about </h1>')
//         response.write('<p>Sobre nós: somos uma empresa dedicada a...</p>')
//         response.end()
//     }else{
//         response.writeHead(404, {'Content-Type': 'text/html'})
//         response.write('<h1> 404 Page not found </h1>')
//         response.end()
//     }
// }).listen(PORT, () => {
//     console.log(`O servidor está aberto em http://localhost:${PORT}`)
// })



/*02 - Construção de URLs
Escreva um programa em Node.js que construa uma URL com base nas seguintes informações:
Protocolo: http
Host: api.example.com
Caminho: /data
Parâmetros de consulta: {param1: 'value1', param2: 'value2'}
O programa deve exibir a URL completa construída.
Saída esperada:URL: http://api.example.com/data?param1=value1&param2=value2*/

// ATIVIDADE ABAIXO

const url = require('url')
const adress = 'http://api.example.com/data?param=1value&param2=value2'
const parseUrl = new url.URL(adress)

console.log(`\nURL: http://${parseUrl.host}${parseUrl.pathname}${parseUrl.search}\n`)



/*03 - Extração de informações de uma URL completa
Escreva um programa em Node.js que receba uma URL completa como entrada e exiba as seguintes informações extraídas da URL:
Protocolo utilizado
Nome do host
Caminho da URL
Parâmetros de consulta (se houver)
Fragmento (hash) da URL (se houver)
Exemplo de entrada: https://www.example.com/path/to/resource?param1=value1#section

Saída esperada: 
Protocolo: https*/

// ATIVADE ABAIXO 

//  const url = require('url')
//  const adress = 'https://www.example.com/path/to/resource?param1=value1#section'
//  const parseUrl = new url.URL(adress)

// console.log('Protocolo utilizado:', parseUrl.protocol);
// console.log('Nome do host:', parseUrl.host);
// console.log('Caminho da URL:', parseUrl.pathname);
// console.log('Parâmetros de consulta:', parseUrl.searchParams);
// console.log('Fragmento (hash) da URL:', parseUrl.hash);