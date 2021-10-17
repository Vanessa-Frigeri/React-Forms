import React, { useState, useContext } from 'react';
import {
  TextField, Button,
} from '@material-ui/core';
import ValidationsRegister from '../../context/ValidationsRegister';
import useErrors from '../../hooks/useErrors';

function UserData({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const validations = useContext(ValidationsRegister);
  const [errors, validFields, canSubmit] = useErrors(validations);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSubmit()) {
          onSubmit({
            username, password,
          });
        }
      }}
    >
      <TextField
        value={username}
        id="username"
        name="username"
        label="E-mail"
        variant="outlined"
        type="email"
        fullWidth
        required
        margin="normal"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        onBlur={validFields}
        error={!errors.username.isValid}
        helperText={errors.username.textHelp}
      />
      <TextField
        value={password}
        id="password"
        name="password"
        label="Senha"
        variant="outlined"
        type="password"
        fullWidth
        required
        margin="normal"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onBlur={validFields}
        error={!errors.password.isValid}
        helperText={errors.password.textHelp}
      />
      <Button variant="contained" color="primary" type="submit">
        Proximo
      </Button>
    </form>
  );
}

export default UserData;
