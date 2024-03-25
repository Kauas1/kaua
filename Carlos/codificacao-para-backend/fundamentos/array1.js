// Estrutura de dados -> ARRAY

//|3 - [1-3] - - -|
// Ambos são Arrays
const array = [] //Recomendado
const vetor = new Array()

console.log(typeof array)
console.log(typeof vetor)

// Referêcia aos elementos de um array
const produtos = ["Arroz", 'Feijão', 'Iogurt']
console.log(produtos[1]) // Imprime o Feijão

// Inclusão e exclusão de elementos/itens
const estados = ["Alagoas"]
estados.push('Recife') // Adiciona no final do Array
console.log(estados)
//[0,1,2]
estados.unshift('Bahia') // Adiciona no início
console.log(estados)

estados.pop() // Excluir no final do array
console.log(estados)

estados.shift() // Excluir no inicio do array
console.log(estados)

// Verificar o tamanho/quantidade de itens do array
const numeros = [1,2,3,4,5,6]
console.log(`Tamanho do array: ${numeros.length}`)

//Apresentar dados de um array
const cidades = ['Maceió', 'Rio Largo', 'Marechal']
console.log(`${cidades} \t ${cidades.toString()} \t ${cidades.join(' - ')}`)