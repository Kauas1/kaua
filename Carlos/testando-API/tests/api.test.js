const axios = require('axios')

async function ApiDogs(){
    const response = await axios.get('https://narutodb.xyz/api/clan/0')

    return response.data
}

test('Verifica se obtém os dados corretamente', async () => {
    const dados = await ApiDogs();
    expect(dados.id).toBe(0); 
})