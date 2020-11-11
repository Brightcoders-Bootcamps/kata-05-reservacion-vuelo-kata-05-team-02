import React, {useState} from 'react';
import {View, Text} from 'react-native';

import SignupForm from './signupView';
import LoginView from './loginView';

const MainScreen = () => {
  const formObject = {
    name: '',
    email: '',
    password: '',
    agreed: false,
    subscribed: false,
  };
  const [isLoginFormActive, setIsLoginFormActive] = useState(false);
  const [formObjectState, setFormObjectState] = useState(formObject);
  const [modalVisible, setModalVisible] = useState(false);
  const [singedText, setSignetText] = useState('');
  const [isIconCheck, setIsIconCheck] = useState(true);

  const addFill = (propierty, value) => {
    setFormObjectState({
      ...formObjectState,
      [propierty]: value,
    });
  };
  React.useEffect(() => {
    if (isLoginFormActive) {
      formObject.agreed = true;
      formObject.subscribed = true;
      formObject.name = '-';
      setFormObjectState(formObject);
    } else {
      formObject.agreed = false;
      formObject.subscribed = false;
      formObject.name = '-';
      setFormObjectState(formObject);
    }
  }, [isLoginFormActive]);

  const showModal = () => {
    setModalVisible(true);
    let textModal = isLoginFormActive ? 'Logging In...' : 'Signing Up...';
    setSignetText(textModal);
    setTimeout(function () {
      setIsIconCheck(false);
      SignUpOrLoginAction();
      textModal = isLoginFormActive ? 'Logged In' : 'Signed Up';
      setSignetText(textModal);
      setTimeout(function () {
        setModalVisible(false);
        setIsIconCheck(true);
      }, 1000);
    }, 3000);
  };

  const SignUpOrLoginAction = () => {
    if (isLoginFormActive) {
      //accion para login
      console.log('logeado');
    } else {
      console.log('registrado');
    }
  };

  return (
    <>
      {isLoginFormActive ? (
        <LoginView
          isLoginFormActive={isLoginFormActive}
          setIsLoginFormActive={setIsLoginFormActive}
          showModal={showModal}
          addFill={addFill}
          formObjectState={formObjectState}
          modalVisible={modalVisible}
          singedText={singedText}
          isIconCheck={isIconCheck}
        />
      ) : (
        <SignupForm
          setIsLoginFormActive={setIsLoginFormActive}
          isLoginFormActive={isLoginFormActive}
          setIsLoginFormActive={setIsLoginFormActive}
          showModal={showModal}
          addFill={addFill}
          formObjectState={formObjectState}
          modalVisible={modalVisible}
          singedText={singedText}
          isIconCheck={isIconCheck}
        />
      )}
    </>
  );
};

export default MainScreen;
