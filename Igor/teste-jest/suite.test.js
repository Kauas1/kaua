function concatenaçãoString(str1, str2){
    return str1 + str2
}

describe("Exercícios de teste", () => {
    test('Verifica se um número é igual ao outro', () => {
        expect(1).toBe(1);
    });
    test('verificar se um valor é estrimamente igual', () => {
        expect('1').not.toBe(1);
    }),
    test('Verificar concatenação de string', () => {
        expect(concatenaçãoString('Tudo', 'Bem?')).toBe('TudoBem?');
    })
});