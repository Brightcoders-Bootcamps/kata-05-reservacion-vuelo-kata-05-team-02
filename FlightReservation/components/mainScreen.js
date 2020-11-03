
import React, { useState } from 'react';
import {
  View,
  Text,
} from 'react-native';

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
  const [singedText, setSignetText] = useState("Singing up...")
  const [isIconCheck, setIsIconCheck] = useState(true);

  const addFill = (propierty, value) => {
    setFormObjectState({
      ...formObjectState,
      [propierty]: value,
    });
  };
  React.useEffect(() => {
    if (isLoginFormActive) {
      formObject.agreed= true;
      formObject.subscribed= true;
      setFormObjectState(formObject);
    } else {
      formObject.agreed= false;
      formObject.subscribed= false;
      setFormObjectState(formObject);
    }
  },[isLoginFormActive])

  const showObj = () => {
    console.log(formObjectState);
  };
  const showModal = () => {
    setModalVisible(true);
    setTimeout(function () {
      setSignetText("Signed Up");
      setIsIconCheck(false);
      setTimeout(function () {
        setModalVisible(false);
        setSignetText("Signing up...");
        setIsIconCheck(true);
      }, 1000);
    },
      3000);
  }

  return (

    <>
      {isLoginFormActive
        ? <LoginView isLoginFormActive={isLoginFormActive} setIsLoginFormActive={setIsLoginFormActive} showObj={showObj}
          showModal={showModal} addFill={addFill} formObjectState={formObjectState} modalVisible={modalVisible} singedText={singedText} isIconCheck={isIconCheck} />

        : <SignupForm setIsLoginFormActive={setIsLoginFormActive} isLoginFormActive={isLoginFormActive} setIsLoginFormActive={setIsLoginFormActive} showObj={showObj}
          showModal={showModal} addFill={addFill} formObjectState={formObjectState} modalVisible={modalVisible} singedText={singedText} isIconCheck={isIconCheck} />
      }

    </>
  );
}



export default MainScreen;