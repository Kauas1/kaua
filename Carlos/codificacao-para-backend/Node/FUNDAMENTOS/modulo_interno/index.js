const meuModulo = require('./meu_modulo') // não precisa do .js pois ja identifica que é um arquivo js
console.log(meuModulo)

const soma = meuModulo.soma
soma(2,2)

const aoQuadrado = meuModulo.aoQuadrado
aoQuadrado(2)

const subtração = meuModulo.subtração
subtração(2,2)

const divisao = meuModulo.divisao
divisao(2,2)

const multiplicacao = meuModulo.multiplicacao
multiplicacao(2,2)