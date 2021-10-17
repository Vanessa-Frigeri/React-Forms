import React, { useState, useContext } from 'react';
import {
  TextField, Button,
} from '@material-ui/core';
import ValidationsRegister from '../../context/ValidationsRegister';
import useErrors from '../../hooks/useErrors';

function DeliveryData({ onSubmit }) {
  const [streetAddress, setStreetAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [additionAddress, setAdditionAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const validations = useContext(ValidationsRegister);
  const [errors, validFields, canSubmit] = useErrors(validations);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSubmit()) {
          onSubmit({
            streetAddress, numberAddress, additionAddress, city, province, zipCode, country,
          });
        }
      }}
    >
      <TextField
        value={zipCode}
        id="zipCode"
        name="zipCode"
        label="CEP"
        variant="outlined"
        type="text"
        margin="normal"
        onChange={(e) => {
          setZipCode(e.target.value);
        }}
        onBlur={validFields}
        error={!errors.zipCode.isValid}
        helperText={errors.zipCode.textHelp}
      />
      <TextField
        value={streetAddress}
        id="streetAddress"
        name="streetAddress"
        label="Rua"
        variant="outlined"
        type="text"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setStreetAddress(e.target.value);
        }}
      />
      <TextField
        value={numberAddress}
        id="numberAddress"
        name="numberAddress"
        label="Número"
        variant="outlined"
        type="number"
        margin="normal"
        onChange={(e) => {
          setNumberAddress(e.target.value);
        }}
      />
      <TextField
        value={additionAddress}
        id="additionAddress"
        name="additionAddress"
        label="Complemento"
        variant="outlined"
        type="text"
        fullWidth
        margin="normal"
        onChange={(e) => {
          setAdditionAddress(e.target.value);
        }}
      />
      <TextField
        value={city}
        id="city"
        name="city"
        label="Cidade"
        variant="outlined"
        type="text"
        margin="normal"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <TextField
        value={province}
        id="province"
        name="province"
        label="Estado"
        variant="outlined"
        type="text"
        margin="normal"
        onChange={(e) => {
          setProvince(e.target.value);
        }}
      />
      <TextField
        value={country}
        id="country"
        name="country"
        label="País"
        variant="outlined"
        type="text"
        margin="normal"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DeliveryData;
