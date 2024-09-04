import { areaQuadrado, listaDeFrutas } from "./index.js"

test("Verifica área do quadrado", ()=>{
    expect(areaQuadrado(10)).toBe(100)
    expect(areaQuadrado(5)).toBe(25)
    expect(areaQuadrado(20)).toBe(400)
})

test("Compara strings", ()=>{
    expect("igor").toBe("igor")
    expect("igor").not.toBe("ygor")
    expect("IGOR").toEqual("IGOR")
})

test("Verifica se tem Genipapo", ()=>{
    expect(listaDeFrutas()).toContain("Genipapo")
})