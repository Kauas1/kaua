const Bonus = require('./index');

describe('Testa a função Bonus', () => {
    test('Verifica se o bônus de 10% é adicionionado', () => {
        // Declara o valor do salario
        const salario = 10000;
        // Chama a função e adiciona valor do salario
        const salarioComBonus= Bonus(salario);
        // Testa a função Bonus
        expect(salarioComBonus).toBe(11000)
    })
});