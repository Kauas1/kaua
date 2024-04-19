/*Atividade 1: Informações do Sistema Operacional
Escreva um código que exiba o nome da plataforma do sistema operacional em que o Node.js está sendo executado.
Em seguida, exiba também a arquitetura do sistema operacional.*/

const os = require('node:os')

console.log(`O seu sistema operacional é: ${os.type()} \n A sua arquitetura: ${os.arch()}`)