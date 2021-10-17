import React, { useState } from 'react';
import {
  Button, TextField, FormControlLabel, Switch,
} from '@material-ui/core';

function FormRegister({ onSubmit, validCPF }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    cpf: { isValid: true, textHelp: '' },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          firstName, lastName, cpf, promotions, news,
        });
      }}
    >
      <TextField
        value={firstName}
        id="first-name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <TextField
        value={lastName}
        id="last-name"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <TextField
        value={cpf}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!errors.cpf.isValid}
        helperText={errors.cpf.textHelp}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={(e) => {
          const isValid = validCPF(e.target.value);
          setErrors({ cpf: isValid });
        }}
      />
      <FormControlLabel
        control={(
          <Switch
            checked={promotions}
            name="promotions"
            color="primary"
            onChange={(e) => {
              setPromotions(e.target.checked);
            }}
          />
)}
        label="Promoções"
      />
      <FormControlLabel
        control={(
          <Switch
            checked={news}
            name="news"
            color="primary"
            onChange={(e) => {
              setNews(e.target.checked);
            }}
          />
)}
        label="Novidades"
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
export default FormRegister;
