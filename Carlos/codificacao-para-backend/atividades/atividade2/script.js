
const btnApostar = document.querySelector('#btnApostar')
const btnJogar = document.querySelector('#btnJogar')
const outErros = document.querySelector('#outErros')
const outChances = document.querySelector('#outChances')


let erros = []
let chances = 6
let dica = 0
const sortearNumero = Math.floor(Math.random()*100) + 1


console.log(sortearNumero)


btnApostar.addEventListener('click', () => {
    sorteado = sortearNumero
    const inNumero = document.querySelector('#inNumero').value
    const outDica= document.querySelector('#outDica')
   
    if(inNumero < sorteado){
     outDica.textContent = `O número sorteado é Maior do que ${inNumero}`
    }else if(inNumero > sorteado){
        outDica.textContent = `O número sorteado é Menor do que ${inNumero}`
    }
   if(inNumero <= 0 || inNumero > 100 || inNumero == isNaN){
    alert('Digite um número Válido')
   }else if(inNumero == sortearNumero){
    btnApostar.disabled = true
    outDica.textContent = `Parabéns! o Número é ${sorteado}` 
   }
   else if(chances == 0){
    alert('Você perdeu o Jogo')
    outDica.textContent = `O número era ${sorteado}`
   }
   else{
    chances = chances - 1
    outChances.innerHTML = chances
    erros.push(inNumero)
    outErros.innerHTML = `${erros.join(', ')}`
   }
   
   
   
})

btnJogar.addEventListener('click', () => {
    window.location.reload()
})