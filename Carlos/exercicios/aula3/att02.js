// Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.
const data = require('./onibus.json')
const onibusDisponiveis = (id_linha, data) => {
    const disponiveis = data.onibus.filter(onibus => onibus.linha === id_linha)
    return disponiveis.length
}
const id_Linha_desejada = 1
const quantidade = onibusDisponiveis(id_Linha_desejada, data)

console.log(`Na linha ${id_Linha_desejada} existem ${quantidade} disponiveis`)



 