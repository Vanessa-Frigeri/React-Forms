import React, { useState } from 'react';
import {
  TextField, Button,
} from '@material-ui/core';

function UserData({ onSubmit, validations }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    password: { isValid: true, textHelp: '' },
  });

  function canSubmit() {
    for (const field in errors) {
      if (!errors[field].isValid) {
        return false;
      }
    }
    return true;
  }

  function validFields(e) {
    const { name, value } = e.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }
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
