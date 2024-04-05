// criar um modulo soma, importar o module soma, importar minimist, node index.js --numero1=10 --numero=20


//modulo externo
const minimist = require('minimist')
console.log(minimist)
//modulo interno
const soma = require('./soma').soma


const args = minimist(process.argv.splice(2))

const a = args['numero1']
const b = args['numero2']

console.log(`${a} + ${b} = ${soma(a,b)}`)