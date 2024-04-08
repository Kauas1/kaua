const fs = require('fs') //fs serve para procurar pasta e arquivo

console.log('start')


fs.writeFile('Arquivo2.txt', 'Olá', () => {
    setTimeout(() => {
        console.log('Arquivo Criado')
    }, 3000)
})

console.log('End')
