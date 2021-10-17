import React, { useContext, useState } from 'react';
import {
  Button, TextField, FormControlLabel, Switch,
} from '@material-ui/core';
import ValidationsRegister from '../../context/ValidationsRegister';
import useErrors from '../../hooks/useErrors';

function PersonalData({ onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const validations = useContext(ValidationsRegister);
  const [errors, validFields, canSubmit] = useErrors(validations);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSubmit()) {
          onSubmit({
            firstName, lastName, cpf, promotions, news,
          });
        }
      }}
    >
      <TextField
        value={firstName}
        id="first-name"
        name="first-name"
        label="Nome"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <TextField
        value={lastName}
        id="last-name"
        name="last-name"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <TextField
        value={cpf}
        id="cpf"
        label="CPF"
        name="cpf"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        error={!errors.cpf.isValid}
        helperText={errors.cpf.textHelp}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={validFields}
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
        Próximo
      </Button>
    </form>
  );
}
export default PersonalData;
