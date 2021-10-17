/* eslint-disable no-use-before-define */
import {
  Step, StepLabel, Stepper, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DeliveryData from './DeliveryData';
import PersonalData from './PersonalData';
import UserData from './UserData';

function FormRegister({ onSubmit, validations }) {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [collectedDatas, setCollectedDatas] = useState({});

  useEffect(() => {
    if (currentPhase === currentForms.length - 1) {
      onSubmit(collectedDatas);
    }
  });

  function nextPhase() {
    setCurrentPhase(currentPhase + 1);
  }

  function collectDatas(datas) {
    setCollectedDatas({ ...collectedDatas, ...datas });
    nextPhase();
  }

  const currentForms = [
    <UserData onSubmit={collectDatas} validations={validations} />,
    <PersonalData onSubmit={collectDatas} validations={validations} />,
    <DeliveryData onSubmit={collectDatas} validations={validations} />,
    <Typography variant="h5">Obrigada pelo cadastro!</Typography>,
  ];

  return (
    <>
      <Stepper activeStep={currentPhase}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {currentForms[currentPhase]}
    </>

  );
}

export default FormRegister;
