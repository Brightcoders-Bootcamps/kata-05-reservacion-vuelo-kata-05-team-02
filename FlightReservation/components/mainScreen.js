
import React, { useState } from 'react';
import {
  View,
  Text,
  LogBox,
  Settings
} from 'react-native';

import SignupForm from './signupView';
import LoginView from './loginView';
import { firebase } from '../bdd/configFirebase';
firebase.firestore().settings({experimentalForceLongPolling: true}) 
const db = firebase.firestore(firebase);
LogBox.ignoreLogs(['Setting a timer'])


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
  const [singedText, setSignetText] = useState("")
  const [isIconCheck, setIsIconCheck] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  

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
      formObject.agreed= false;
      formObject.subscribed= false;
      formObject.name = '-'
      setFormObjectState(formObject);
    }
  },[isLoginFormActive])

  const showObj = () => {
    console.log(formObjectState);
  };
  
  const showModal = () => {
    setModalVisible(true);
    let textModal = isLoginFormActive ? "Logging In..." : "Signing Up...";
    setSignetText(textModal);
    setTimeout(function () {
      setIsIconCheck(false);
      SignUpOrLoginAction();      
      textModal = isLoginFormActive ? "Logged In" : "Signed Up";
      setSignetText(textModal);
      setTimeout(function () {
        setModalVisible(false);
        setIsIconCheck(true);
      }, 1000);
    }, 3000);
  }

  const SignUpOrLoginAction = () =>{
    if(isLoginFormActive){
      // Accion para login
      console.log("logeado")
    } else {
      let userEmailIsRegister = false;

      db.collection('usuario')
      db.collection("usuario").where("email", "==", formObjectState.email)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            userEmailIsRegister = true;
            console.log(doc.id, " => ", doc.data());
          });
      })
      .catch(function(error) {
          console.log('no hay datos');
      });

      if(!userEmailIsRegister){
        const data = {
          firstName: formObjectState.name,
          email: formObjectState.email,
          password: formObjectState.password
        }
  
        // Crea un store en Firebase
        db.collection('usuario')
        .add(data) 
        .then(() => {  }) 
        .catch( ()=>{ console.log( 'Error: ' + e ) })
  
        // Crea un usuario en Authentication
        // Crea un usuario en Authentication
        firebase
          .auth()
          .createUserWithEmailAndPassword(formObjectState.email, formObjectState.password)
          .then(() =>{ 
            console.log('Usuario registrado correctamente.');
            setValidEmail(true);
          }) 
          .catch((e) =>{ 
            console.log( 'Error: ' + e )
            setValidEmail(false); 
            
          })
      } else {
        userEmailIsRegister = false;
      }
    }
  }

  return (

    <>
    {isLoginFormActive
        ? <LoginView validEmail={validEmail} setValidEmail={setValidEmail} isLoginFormActive={isLoginFormActive} setIsLoginFormActive={setIsLoginFormActive} showObj={showObj}
          showModal={showModal} addFill={addFill} formObjectState={formObjectState} modalVisible={modalVisible} singedText={singedText} isIconCheck={isIconCheck} />

        : <SignupForm validEmail={validEmail} setValidEmail={setValidEmail} setIsLoginFormActive={setIsLoginFormActive} isLoginFormActive={isLoginFormActive} setIsLoginFormActive={setIsLoginFormActive} showObj={showObj}
          showModal={showModal} addFill={addFill} formObjectState={formObjectState} modalVisible={modalVisible} singedText={singedText} isIconCheck={isIconCheck} />
      }
      
    </>
  );
}



export default MainScreen;