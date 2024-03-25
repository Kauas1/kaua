const btnAdicionar = document.querySelector('#btnAdicionar')
const btnUrgencia = document.querySelector('#btnUrgencia')
const btnAtender = document.querySelector('#btnAtender')
const outList = document.querySelector('#outList')
const outAtendimento = document.querySelector('#outAtendimento')
const inPaciente = document.querySelector('#inPaciente')
const pacientes = []

const adicionarPaciente = () => {
    let nome = inPaciente.value
    if(nome === ''){
        alert('Infome o nome do paciente')
        return
    }
    pacientes.push(nome)


    let lista = ''
    pacientes.map((paciente, index) => {
        return (lista += `${index+1} - ${paciente}\n`)
    })

    outList.textContent = lista;
    inPaciente.value = ''
}

const adicionarUrgencia = () => {
    let nome = inPaciente.value
    if(nome === ''){
        alert('Infome o nome do paciente')
        return
    }
    pacientes.unshift(nome)


let lista = ''
pacientes.map((paciente, index) => {
    return (lista += `${index+1} - ${paciente} \n`)
})

    outList.textContent = lista;
    inPaciente.value = ''
}
const atenderPaciente = () => {
    if(pacientes.length === 0){
        alert("Não existe paciente na fila de espera")
        return
    }
    let atender = pacientes.shift()
    outAtendimento.textContent = atender

    let lista = ""
    pacientes.map((paciente, index) => {
    return (lista += `${index+1} - ${paciente} \n`)
})
}

btnAdicionar.addEventListener('click', adicionarPaciente)
btnUrgencia.addEventListener('click', adicionarUrgencia)
btnAtender.addEventListener('click', atenderPaciente)
