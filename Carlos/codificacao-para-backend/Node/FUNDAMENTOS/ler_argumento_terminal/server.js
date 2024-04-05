const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']
console.log(nome)

const age = args['age']
console.log(`Nome:${nome} e idade ${age} anos`)