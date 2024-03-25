const inNome = document.querySelector('#inNome');
const inIdade = document.querySelector('#inIdade');
const btnAdicionar = document.querySelector('#btnAdicionar');
const btnListar = document.querySelector('#btnListar');
const btnFiltrar = document.querySelector('#btnFiltrar');
const outLista = document.querySelector('#outLista');

let criancas = [];

btnAdicionar.addEventListener('click', () => {
    const nome = inNome.value;
    const idade = parseInt(inIdade.value);

    if (nome === '' || isNaN(idade) || idade <= 0 || idade > 12) {
        alert('Preencha corretamente');
        return;
    }

    criancas.push({ nome, idade });
    inNome.value = '';
    inIdade.value = '';
});

btnListar.addEventListener('click', () => {
    if (criancas.length === 0) {
        alert('Não tem crianças cadastradas.');
        return;
    }

    // Ordena as crianças por idade
    criancas.sort((a, b) => a.idade - b.idade);

    let lista = 'Crianças cadastradas:\n';
    criancas.forEach((crianca, index) => {
        lista += `${index + 1}. Nome: ${crianca.nome}, Idade: ${crianca.idade}\n`;
    });

    outLista.textContent = lista;
});

btnFiltrar.addEventListener('click', () => {
    const idadeFiltro = parseInt(prompt('Digite a idade máxima:'));

    if (isNaN(idadeFiltro) || idadeFiltro <= 0) {
        alert('Idade inválida.');
        return;
    }

    const criancasFiltradas = criancas.filter(crianca => crianca.idade <= idadeFiltro);

    if (criancasFiltradas.length === 0) {
        alert('Não tem crianças dentro da idade máxima.');
        return;
    }

    criancasFiltradas.sort((a, b) => a.idade - b.idade);

    let listaFiltrada = 'Crianças filtradas por idade:\n';
    criancasFiltradas.forEach((crianca, index) => {
        listaFiltrada += `${index + 1}. Nome: ${crianca.nome}, Idade: ${crianca.idade}\n`;
    });

    outLista.textContent = listaFiltrada;
});
