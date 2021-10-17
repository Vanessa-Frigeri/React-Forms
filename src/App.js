import React from 'react';
import './assets/App.css';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import FormRegister from './components/FormRegister/FormRegister';
import { validPassword, validCPF } from './models/register';

function onSubmitForm(datas) {
  console.log(datas);
}

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center" color="primary">Formulário de Cadastro</Typography>
      <FormRegister
        onSubmit={onSubmitForm}
        validations={{ cpf: validCPF, password: validPassword }}
      />
    </Container>
  );
}

export default App;
