const data = require('./onibus.json')

// Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.


const infOnibus = (id) =>{
    const onibus = data.onibus.filter((onibus) => onibus.id == id)
    return onibus.length != 0 ? {onibus} : {message: 'Informação do Onibus não encontrado'}

}
const idOnibus = 'A100'
const informacoesOnibus = infOnibus(idOnibus)
console.log(informacoesOnibus)