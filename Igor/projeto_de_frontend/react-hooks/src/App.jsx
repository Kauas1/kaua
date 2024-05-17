import React, { useState } from 'react';
import Input from '../src/Form/Input';

const App = () => {
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({...formData, [fieldName]: value });
  };

  return (
    <div>
      <Input
        label="Nome"
        value={formData.nome}
        onChange={(value) => handleInputChange('nome', value)}
      />
      <Input
        label="Email"
        value={formData.email}
        onChange={(value) => handleInputChange('email', value)}
      />
      <Input
        label="Senha"
        value={formData.senha}
        onChange={(value) => handleInputChange('senha', value)}
      />
      <Input
        label="CEP"
        value={formData.cep}
        onChange={(value) => handleInputChange('cep', value)}
      />
      <Input
        label="Rua"
        value={formData.rua}
        onChange={(value) => handleInputChange('rua', value)}
      />
      <Input
        label="Número"
        value={formData.numero}
        onChange={(value) => handleInputChange('numero', value)}
      />
      <Input
        label="Bairro"
        value={formData.bairro}
        onChange={(value) => handleInputChange('bairro', value)}
      />
      <Input
        label="Cidade"
        value={formData.cidade}
        onChange={(value) => handleInputChange('cidade', value)}
      />
      <Input
        label="Estado"
        value={formData.estado}
        onChange={(value) => handleInputChange('estado', value)}
      />

      <div>
        <p>Nome: {formData.nome}</p>
        <p>Email: {formData.email}</p>
        <p>Senha: {formData.senha}</p>
        <p>CEP: {formData.cep}</p>
        <p>Rua: {formData.rua}</p>
        <p>Número: {formData.numero}</p>
        <p>Bairro: {formData.bairro}</p>
        <p>Cidade: {formData.cidade}</p>
        <p>Estado: {formData.estado}</p>
      </div>
    </div>
  );
};

export default App;
