import React, {useState} from 'react';
import {View, Text, LogBox, Settings} from 'react-native';

import SignupForm from './signupView';
import LoginView from './loginView';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

import {firebase} from '../bdd/configFirebase';
firebase.firestore().settings({experimentalForceLongPolling: true});
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
      setTimeout(function () {
        setModalVisible(false);
        setIsIconCheck(true);
      }, 1000);
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
        password: formObjectState.password
      }
      // Crea un usuario en Authentication
      // Crea un usuario en Authentication
      firebase
        .auth()
        .createUserWithEmailAndPassword(formObjectState.email, formObjectState.password)
        .then(() => {
          console.log('Usuario registrado correctamente.');
          setValidEmail(true);
          setValidPassword(true);
          // Crea un store en Firebase
          db.collection('usuario')
            .add(data)
            .then(() => { })
            .catch(() => { console.log('Error: ' + e) })
        })
        .catch((e) => {
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
  };

  const SignUpGoogle =() =>  {
    if (isLoginFormActive) {
      // Accion para login
      console.log('logeado');
    }else{
      
    }

    console.log('Entrada a la funcion');
  }


 return (
    <>
      {isLoginFormActive
        ? <LoginView validEmail={validEmail} setValidEmail={setValidEmail} validPassword={validPassword} setValidPassword={setValidPassword} isLoginFormActive={isLoginFormActive} setIsLoginFormActive={setIsLoginFormActive} showObj={showObj}
          showModal={showModal} addFill={addFill} formObjectState={formObjectState} modalVisible={modalVisible} singedText={singedText} isIconCheck={isIconCheck}  signUpGoogle={SignUpGoogle} />

        : <SignupForm validEmail={validEmail} setValidEmail={setValidEmail} validPassword={validPassword} setValidPassword={setValidPassword} setIsLoginFormActive={setIsLoginFormActive} isLoginFormActive={isLoginFormActive} setIsLoginFormActive={setIsLoginFormActive} showObj={showObj}
          showModal={showModal} addFill={addFill} formObjectState={formObjectState} modalVisible={modalVisible} singedText={singedText} isIconCheck={isIconCheck}  signUpGoogle={SignUpGoogle}/>
      }

    </>
  );
};

export default MainScreen;
