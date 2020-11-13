import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ModalCustom from './modalComponent';
import SignUpButton from './signUpButtons';
import Form from './formComponent';
import Terms from './termsComponents';
import colors from '../src/colors';
import strings from '../src/strings';

function SignupForm(props) {
  const {
    signUpGoogle,
    validEmail,
    setValidEmail,
    validPassword,
    setValidPassword,
    setIsLoginFormActive,
    isLoginFormActive,
    showModal,
    addFill,
    formObjectState,
    modalVisible,
    singedText,
    isIconCheck,
  } = props;

  return (
    
    <View>
      <Text style={styles.header}>{strings.titleSignUp}</Text>
      
      <Form
        validEmail={validEmail}
        setValidEmail={setValidEmail}
        validPassword={validPassword}
        setValidPassword={setValidPassword}
        changeForm={addFill}
        objValues={formObjectState}
        isLoginFormActive={isLoginFormActive}
      />
      <Terms changeForm={addFill} objValues={formObjectState} />
      <SignUpButton
        objValues={formObjectState}
        showModal={showModal}
        signUpGoogle={signUpGoogle}
        setIsLoginFormActive={setIsLoginFormActive}
        isLoginFormActive={isLoginFormActive}
      />
      <ModalCustom
        modalVisible={modalVisible}
        text={singedText}
        isIconCheck={isIconCheck}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    color: colors.bluePrimary,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 35,
  },
  containerForm: {
    marginHorizontal: 15,
  },
});

export default SignupForm;
