import React, { useState } from 'react';
import { View, Text, LogBox, Settings } from 'react-native';

import SignupForm from './signupView';
import LoginView from './loginView';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from 'react-native-google-signin';

import fir from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '461524927651-kr6p5l2toffdi6sqgs8tktcj8v01nvjj.apps.googleusercontent.com',
});


import { firebase } from '../bdd/configFirebase';
firebase.firestore().settings({ experimentalForceLongPolling: true });
const db = firebase.firestore(firebase);
LogBox.ignoreLogs(['Setting a timer']);

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
  const [validEmail, setValidEmail] = useState(true);
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [validPassword, setValidPassword] = useState(true);


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

  const showObj = () => {
    console.log(formObjectState);
  };

  const showModal = () => {
    setModalVisible(true);
    let textModal = isLoginFormActive ? 'Logging In...' : 'Signing Up...';
    setSignetText(textModal);
    setTimeout(function () {
      setIsIconCheck(false);
      SignUpOrLoginAction();
      textModal = isLoginFormActive ? 'Logged In' : 'Signed Up';
      setSignetText(textModal);
    }, 3000);
  };

  const SignUpOrLoginAction = () => {
    setValidEmail(true);
    setValidPassword(true);
    if (isLoginFormActive) {
      // Accion para login
      console.log('logeado');
    } else {
      const data = {
        firstName: formObjectState.name,
        email: formObjectState.email,
        password: formObjectState.password,
        agreed: formObjectState.agreed,
        subscribed: formObjectState.subscribed,
      }
      firebaseAuthSignUp(data);
    }
  };

  async function SignUpGoogle() {
    setModalVisible(true);
    let textModal = isLoginFormActive ? 'Logging In...' : 'Signing Up...';
    setSignetText(textModal);
    if (isLoginFormActive) {
      // Accion para login
      console.log('logeado');
    } else {
      console.log("here")
      const data = {
        firstName: '',
        email: '',
        password: '',
        agreed: formObjectState.agreed,
        subscribed: formObjectState.subscribed,
      }
      // Get the users ID token
      //const { idToken } = await GoogleSignin.signIn();
      const userData = await GoogleSignin.signIn();//userData contains all the user information
      console.log(userData.user);
      data.firstName = userData.user.name;//+" "+userData.user.familyName;
      data.email = userData.user.email;
      data.password = userData.user.id;
      firebaseAuthSignUp(data);
    }
  }

  function firebaseAuthSignUp(data) {
    // Crea un usuario en Authentication
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setIsIconCheck(false);
        let textModal = isLoginFormActive ? 'Logged In...' : 'Signed Up...';
        setSignetText(textModal);
        setValidEmail(true);
        setValidPassword(true);
        // Crea un store en Firebase
        db.collection('usuario')
          .add(data)
          .then(() => { })
          .catch(() => { console.log('Error: ' + e) })

        setTimeout(function () {
          setModalVisible(false);
          setIsIconCheck(true);
        }, 1000);
        setFormObjectState(formObject);
      })
      .catch((e) => {
        let textModal = isLoginFormActive ? 'Error Loggin In...' : 'Error Signing Up...';
        setSignetText(textModal);
        setTimeout(function () {
          setModalVisible(false);
          setIsIconCheck(true);
        }, 1000);
        //console.log('Error: ' + e)
        switch (e.code) {
          case "auth/invalid-email":
            setValidEmail(false);
            break;
          case "auth/email-already-in-use":
            setValidEmail(false);
            break;
          case "auth/weak-password":
            setValidPassword(false);
            break;
        }
      })
  }

  return (
    <>
      {isLoginFormActive
        ? <LoginView validEmail={validEmail} setValidEmail={setValidEmail} validPassword={validPassword} setValidPassword={setValidPassword} isLoginFormActive={isLoginFormActive} setIsLoginFormActive={setIsLoginFormActive} showObj={showObj}
          showModal={showModal} addFill={addFill} formObjectState={formObjectState} modalVisible={modalVisible} singedText={singedText} isIconCheck={isIconCheck} signUpGoogle={SignUpGoogle} />

        : <SignupForm validEmail={validEmail} setValidEmail={setValidEmail} validPassword={validPassword} setValidPassword={setValidPassword} setIsLoginFormActive={setIsLoginFormActive} isLoginFormActive={isLoginFormActive} setIsLoginFormActive={setIsLoginFormActive} showObj={showObj}
          showModal={showModal} addFill={addFill} formObjectState={formObjectState} modalVisible={modalVisible} singedText={singedText} isIconCheck={isIconCheck} signUpGoogle={SignUpGoogle} />
      }

    </>
  );
};

export default MainScreen;
