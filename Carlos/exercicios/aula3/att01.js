const data = require('./onibus.json')

const HorariosLinha = (id_linha) => {
    const linhaEncontrada = data.linhas.find(linha => linha.id === id_linha)
    return linhaEncontrada ? linhaEncontrada.horarios : null
}

const id_Linha_desejada = 2

const horarios = HorariosLinha(id_Linha_desejada)

console.log(horarios)