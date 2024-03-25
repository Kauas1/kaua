import areaQuadrado from './funcao.js'

console.log(areaQuadrado(5))

// function Soma (a, b){
//     return a + b
// }

// const Soma = (a, b) => a + b

// Destructuring

function MouseMove(event){
    const clientY = event.clientY
    const clientX = event.clientX
    console.log(clientY, clientX)
}

const MouseMoving = (event) => {
    const {clientX, clientY} = event
    console.log(clientX, clientY)
}

const MouseHandle = ({clientX, clientY}) => console.log(clientX, clientY)

// document.documentElement.addEventListener('mousemove', MouseHandle)

// Arrays

const frutas = ['banana', 'maç]a', 'Pera']

const [banana, maca] = frutas 

// Rest

const showList = (empresa, ...funcionarios) => {
        funcionarios.forEach((funcionario) => {
            console.log(funcionario, empresa)
    })
    }

showList('Senai', 'Carlos', 'Leticia', 'Bruno')

