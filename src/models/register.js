function validCPF(cpf) {
  if (cpf.length !== 11) {
    return { isValid: false, textHelp: 'CPF deve ter 11 dígitos.' };
  }
  return { isValid: true, textHelp: '' };
}

function validPassword(password) {
  if (password.length < 4 || password.length > 72) {
    return { isValid: false, textHelp: 'Senha deve ter entre 4 e 72 dígitos.' };
  }
  return { isValid: true, textHelp: '' };
}

function validUsername(username) {
  const email = /\S+@\S+\.\S+/;
  if (!email.test(username)) {
    return { isValid: false, textHelp: 'Endereço de E-mail deve ser válido.' };
  }
  return { isValid: true, textHelp: '' };
}

function validZipCode(zipCode) {
  const isZipCode = /^[0-9]{5}-[0-9]{3}$/;
  if (!isZipCode.test(zipCode)) {
    return { isValid: false, textHelp: 'CEP não é um endereço válido.' };
  }
  return { isValid: true, textHelp: '' };
}

export {
  validCPF, validPassword, validUsername, validZipCode,
};
