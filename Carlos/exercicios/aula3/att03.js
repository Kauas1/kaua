const data = require('./onibus.json')
// Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.
const listarParadasPorLinha = (idLinha) => {
    const linha = data.linhas.find((linha) => linha.id === idLinha)
    console.log(linha)
}
const id = 2

const paradasPorLinha = listarParadasPorLinha(id)
