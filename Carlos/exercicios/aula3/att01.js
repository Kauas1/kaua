// Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.

const data = require('./onibus.json')

    
const HorariosLinha = (id_linha, data) => {
    const linhaEncontrada = data.linhas.find(linha => linha.id === id_linha)
    return linhaEncontrada ? linhaEncontrada.horarios : null
}

const id_Linha_desejada = 1

const horarios = HorariosLinha(id_Linha_desejada, data)

if(horarios){
    console.log(`Horarios da linha ${id_Linha_desejada}`)
    horarios.forEach(horario => console.log(`Saida: ${horario.saida}, Chegada: ${horario.chegada}`))
}else{
    console.log('Linha não encontrada')
}