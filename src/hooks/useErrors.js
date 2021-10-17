import { useState } from 'react';

function createInitialState(validations) {
  const initialState = {};
  for (const field in validations) {
    if ({}.hasOwnProperty.call(validations, field)) {
      initialState[field] = { isValid: true, textHelp: '' };
    }
  }
  return initialState;
}

function useErrors(validations) {
  const initialState = createInitialState(validations);
  const [errors, setErrors] = useState(initialState);

  function validFields(e) {
    const { name, value } = e.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function canSubmit() {
    for (const field in errors) {
      if (!errors[field].isValid) {
        return false;
      }
    }
    return true;
  }
  return [errors, validFields, canSubmit];
}

export default useErrors;
