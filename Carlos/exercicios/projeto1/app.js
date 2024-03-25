// id, salarioMinimo, auxilioAlimentacao, salarioInicial, turnos, horasTrabalhadas, Categoria

const btn = document.querySelector('#btn')




btn.addEventListener('click', () => {
    const id = document.querySelector('#id').value
    const turno = document.querySelector('#turno').value.toUpperCase()
    const horasTrabalhadas = document.querySelector('#horas').value
    const categoria = document.querySelector('#categoria').value.toUpperCase()

    const salarioInicial = calcSalario(turno,categoria,horasTrabalhadas)
    console.log(salarioInicial)

    relatorio(horasTrabalhadas,salarioInicial,auxilioAli(salarioInicial),sFinal(auxilioAli(salarioInicial),salarioInicial),id)

    console.log(`Código do Funcionario: ${id} Seu turno: ${turno} Horas Trabalhadas: ${horasTrabalhadas} Categoria: ${categoria}`)
})

function calcSalario(turno, categoria, horasTrabalhadas) {
    const salarioMinimo = 450
    let salarioInicial
    if (categoria === 'G' && turno === 'N') {
        salarioInicial = salarioMinimo * 0.18 * horasTrabalhadas
    } else if (categoria === 'G' && turno === 'M' || turno === 'V') {
        salarioInicial = salarioMinimo * 0.15 * horasTrabalhadas
    } else if (categoria === 'O' && turno === 'N') {
        salarioInicial = salarioMinimo * 0.13 * horasTrabalhadas
    } else if (categoria === 'O' && turno === 'M' || turno === 'V') {
        salarioInicial = salarioMinimo * 0.10 * horasTrabalhadas
    }
    return salarioInicial;
}

function auxilioAli(salarioInicial) {
    let auxilioAlimentacao
    if (salarioInicial <= 300) {
        auxilioAlimentacao = salarioInicial * 0.20
    } else if (salarioInicial >= 300 && salarioInicial <= 600) {
        auxilioAlimentacao = salarioInicial * 0.15
    } else if (salarioInicial > 600) {
        auxilioAlimentacao = salarioInicial * 0.05
    }
    return auxilioAlimentacao;
}

function sFinal(auxilioAlimentacao, salarioInicial) {
    let SalarioFinal
    if (salarioInicial <= 300) {
        SalarioFinal = salarioInicial + auxilioAlimentacao
    } else if (salarioInicial >= 300 && salarioInicial <= 600) {
        SalarioFinal = salarioInicial + auxilioAlimentacao
    } else if (salarioInicial > 600) {
        SalarioFinal = salarioInicial + auxilioAlimentacao
    }
    return SalarioFinal;
}

function relatorio(horasTrabalhadas,SalarioInicial,auxilioAlimentacao,SalarioFinal,id) {
    const idN = Number(id)

    const relatorio = document.createElement('div')
    const form = document.querySelector('.form')
    form.remove()
    relatorio.innerHTML = `
    <h1> Relátorio dos Funcionarios </h1>
    <p>Id: ${idN} </p>
    <p>Horas Trabalhadas: ${horasTrabalhadas} </p>
    <p>Salário Inicial: ${SalarioInicial} </p>
    <p>Auxílio Alimentação: ${auxilioAlimentacao} </p>
    <p>Salário Final: ${SalarioFinal} </p>
    `
    document.body.appendChild(relatorio);
}

