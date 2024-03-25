//Operador Spred e Rest => ...
//Spred
const arrayOriginal = [1,2,3,4];
const arrayFake = [...arrayOriginal]
console.log(arrayFake)

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
const juntar = [...array1, ...array2]
console.log(juntar)

const arr3 = array1
console.log(arr3)

const objOriginal = {nome: 'Carlos', idade:32}
const objFake = {...objOriginal}
console.log(objFake)

const novoObjeto = {...objOriginal, profissao: "Developer"}
console.log(novoObjeto)

//Rest
function soma(...numeros){
    return numeros.reduce((total, numero) => total+numero, 0);
}
console.log(soma(1,2,3,4,5,6))