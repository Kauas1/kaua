// // Mostre os dados da aplicação, como apresentado na aula
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  





    const App = () => {
    const dados = luana;
     
    let gasto = 0
    
    dados.compras.forEach((dado) => {
      dado.compras.replace("R$", "")
    })

    const limite = gasto > 10000 ? "Você está gastando Muito!" : "Sua situação está OK!"
    const ativo = dados.ativa ? "Ativo" : "Inativ"  
    const cor = dados.ativa = "Ativo" ? "green" : "red"
    
    return <div>
      
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>Situação: {dados.cliente}</p>
    <p>Nome: {dados.cliente}</p>
    <p>Nome: {dados.cliente}</p>
    </div>;

  }

  export default App;