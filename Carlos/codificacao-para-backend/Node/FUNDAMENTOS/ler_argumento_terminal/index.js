// Ler argumentos no terminal mesmo com nada criado dentro do código, é possivel fazer uma aplicação do zero utilizando desse método, porém é ideal conhecer algumas instruções para facilitar na hora da codificação
console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1] //'nome=Carlos'
console.log(nome)

const idade = args[1].split('=')[1] //'age=32'
console.log(idade)
console.log(`O nome ${nome} e idade ${idade} anos`) 