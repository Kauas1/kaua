// Arrow Function
let circleArea = function (r){
    let PI = Math.PI
    let area = PI * r * r
    return area.toFixed(2)
}
console.log(circleArea(6))

let clicleArea2 = (r) => {
    let PI = Math.PI;
    let area = PI * r * r;
    return area.toFixed(2)
}
console.log(circleArea(6)+5)

let circleArea3 = (r) => (Math.PI*r*r).toFixed(2)
console.log (circleArea3(2)+4)