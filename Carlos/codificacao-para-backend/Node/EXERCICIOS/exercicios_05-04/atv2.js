/*Atividade 2: Informações do Processador
Escreva um código que exiba as informações de cada processador do sistema, incluindo a velocidade, o modelo e o identificador.
Utilize o método os.cpus() para obter as informações.*/

const os = require('node:os')

os.cpus().forEach((inf) => {
    console.log(`Usuário: ${inf.times.user} | Velocidade: ${inf.speed} | Modelo: ${inf.model}`)
})
// console.log(`As informações da sua CPU é de:`, os.cpus()) 