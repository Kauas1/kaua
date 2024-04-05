const fs = require('fs') //File System

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
}) //o primeiro é para puxar o arquivo, depois como está criptografado e por fim uma função com parametro com erro e data 
