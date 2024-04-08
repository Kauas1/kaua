/*Atividade 6: Pesquise outros métodos e propriedades do módulo OS
Crie um código que exiba informações adicionais do sistema operacional, como número IPV4 e IPV6 de rede, 
Informações de tempo de atividade do sistema operacional em Horas, minutos e segundos
Diretórios temporários.*/

const os = require('node:os')
const ipv6 = Object.values(os.networkInterfaces()).flat()[0].address
const ipv4 = Object.values(os.networkInterfaces()).flat()[1].address
const up = os.uptime()
const converta = (segs) => {
    let seg = parseInt(segs % 60)
    let min = parseInt((segs / 60) %60)
    let horas = parseInt(segs / 60 %60)

    return `${horas}h: ${min}m: ${seg}seg`
}

    console.log(`IPV6 ${ipv6}} | IPV4 ${ipv4}  \nE o tempo de atividade do sistema operacional: Tempo de Atividade ${converta(up)}`)




