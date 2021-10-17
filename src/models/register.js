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

export { validCPF, validPassword };
