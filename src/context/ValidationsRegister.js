import React from 'react';

function withoutValidation(datas) {
  console.log(datas);
  return { isValid: true, textHelp: '' };
}

const ValidationsRegister = React.createContext(
  {
    cpf: withoutValidation,
    password: withoutValidation,
    username: withoutValidation,
    zipCode: withoutValidation,
  },
);

export default ValidationsRegister;
