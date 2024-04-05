module.exports = {
     soma(a,b){
        console.log(`Soma: ${a} + ${b} = ${a+b}`)
     },
     aoQuadrado(a){
        console.log(`Ao Quadrado: ${a}² = ${a*a}`)
     },subtração(a,b){
        console.log(`Subtração: ${a} - ${b} = ${a-b}`)
     },
     divisao(a, b){
            if(a <= 0 || b <= 0){
            console.log('Divisão: Coloque um número maior que zero')
        }else{
            console.log(`${a} / ${b} = ${a/b}`)
        }
     },multiplicacao(a,b){
        console.log(`Multiplicação: ${a} X ${b} = ${a*b}`)
     }
}