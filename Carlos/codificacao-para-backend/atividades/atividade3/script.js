const inmodelo = document.querySelector('#inModelo')
const inpreco = document.querySelector('#inPreco')

const btnAdicionar = document.querySelector('#btnAdicionar')
const btnListar = document.querySelector('#btnListar')
const btnFiltrar = document.querySelector('#btnFiltrar')

let Carros = [] 

btnAdicionar.addEventListener('click', () => {
    const modelo = inmodelo.value
    const preco = Number(inpreco.value)

    if(modelo === '' || preco <= 0 || isNaN(preco)){
        alert('Informe os dados corretamente')
        inmodelo.focus()
        return
    }

    Carros.push({modelo: modelo, preco: preco})
    inmodelo.value = ""
    inpreco.value = ""
})

btnListar.addEventListener('click', () => {
    const listarCarros = () => {
        if(Carros.length === 0){
            alert('Não há carros cadastrados')
            inmodelo.focus()
            return
        }
        let lista = ''
        Carros.forEach((carro) => {
            lista += `${carro.modelo} --- ${carro.preco}\n`
        })
        document.getElementById("outLista").textContent = lista
    }

    listarCarros()
})

btnFiltrar.addEventListener('click', () => {
    const filtrarPorPreco = () => {
        const precoFiltro = Number(prompt("Digite o preço máximo:"))

        if(isNaN(precoFiltro) || precoFiltro <= 0) {
            alert("Preço inválido.")
            return
        }

        const carrosFiltrados = Carros.filter(carro => carro.preco <= precoFiltro)
        if(carrosFiltrados.length === 0) {
            alert("Não há carros dentro do preço máximo.")
            return
        }

        let listaFiltrada = ''
        carrosFiltrados.forEach((carro) => {
            listaFiltrada += `${carro.modelo} --- ${carro.preco}\n`
        })

        document.getElementById("outLista").textContent = listaFiltrada
    }

    filtrarPorPreco()
})