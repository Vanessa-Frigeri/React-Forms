import React from 'react';
import './assets/App.css';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import FormRegister from './components/FormRegister/FormRegister';
import {
  validPassword, validCPF, validUsername, validZipCode,
} from './models/register';
import ValidationsRegister from './context/ValidationsRegister';

function onSubmitForm(datas) {
  console.log(datas);
}

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center" color="primary">Formulário de Cadastro</Typography>
      <ValidationsRegister.Provider value={{
        cpf: validCPF,
        password: validPassword,
        username: validUsername,
        zipCode: validZipCode,
      }}
      >
        <FormRegister onSubmit={onSubmitForm} />
      </ValidationsRegister.Provider>
    </Container>
  );
}

export default App;
