const data = require('./onibus.json')

// Implemente uma função que aceite um status como entrada (por exemplo, "em operação" ou "em manutenção") e retorne uma lista de ônibus com esse status.

const data = require('./onibus.json')

const onibusDisponiveis = (id_linha, data) => {
    const disponiveis = data.onibus.filter(onibus => onibus.status === id_linha && "em operação")
    return disponiveis.length
}

const id_Linha_desejada = 1
const quantidade = onibusDisponiveis(id_Linha_desejada, data)

console.log(`Na linha ${id_Linha_desejada} existem ${quantidade} disponiveis`)