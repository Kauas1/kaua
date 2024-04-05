const data = require('./onibus.json')

// Implemente uma função que aceite um status como entrada (por exemplo, "em operação" ou "em manutenção") e retorne uma lista de ônibus com esse status.

const onibusPorStatus = (status) =>{
    const onibus = data.onibus.filter((onibus) => onibus.status == status)
    return onibus.length != 0 ? {onibus} : {message: 'Onibus não encontrado'}
}
const statusOnibus = 'em operação'
const situacaoOnibus = onibusPorStatus(statusOnibus)