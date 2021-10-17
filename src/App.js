import React from 'react';
import './assets/App.css';
import { Container, Typography } from '@material-ui/core';
import FormRegister from './components/FormRegister/FormRegister';
import '@fontsource/roboto';

function onSubmitForm(datas) {
  console.log(datas);
}

function validCPF(cpf) {
  if (cpf.length !== 11) {
    return { isValid: false, textHelp: 'CPF deve ter 11 dígitos' };
  }
  return { isValid: true, textHelp: '' };
}
function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center" color="primary">Formulário de Cadastro</Typography>
      <FormRegister onSubmit={onSubmitForm} validCPF={validCPF} />
    </Container>
  );
}

export default App;
