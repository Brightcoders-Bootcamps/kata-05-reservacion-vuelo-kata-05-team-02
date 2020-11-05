import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SignUpButton from './signUpButtons';
import Form from './formComponent';
import ModalCustom from './modalComponent';

function LoginView(props) {
  const {signUpGoogle,validEmail,setValidEmail,setIsLoginFormActive, isLoginFormActive, showObj, showModal, addFill, formObjectState, modalVisible, singedText, isIconCheck} = props;
  
  return (
    <View>
      <Text style={styles.header}>Log In</Text>
      <Form validEmail={validEmail} setValidEmail={setValidEmail} changeForm={addFill} objValues={formObjectState} isLoginFormActive={isLoginFormActive} />
      <SignUpButton prueba={showObj} 
        objValues={formObjectState} 
        showModal={showModal}
        signUpGoogle={signUpGoogle}
        setIsLoginFormActive={setIsLoginFormActive}
        isLoginFormActive={isLoginFormActive}/>
      <ModalCustom modalVisible={modalVisible} text={singedText} isIconCheck={isIconCheck} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: '#3E59F7',
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 35,
  },
});

export default LoginView;