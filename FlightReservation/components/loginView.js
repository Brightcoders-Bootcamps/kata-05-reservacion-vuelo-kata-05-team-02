import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SignUpButton from './signUpButtons';
import Form from './formComponent';
import ModalCustom from './modalComponent';
import colors from '../src/colors';
import strings from '../src/strings';

function LoginView(props) {
  const {
    signUpGoogle,
    validEmail,
    setValidEmail,
    validPassword,
    setValidPassword,
    setIsLoginFormActive,
    isLoginFormActive,
    showObj,
    showModal,
    addFill,
    formObjectState,
    modalVisible,
    singedText,
    isIconCheck,
  } = props;

  return (
    <View>
      <Text style={styles.header}>{strings.titleLogIn}</Text>
      <Form
        validEmail={validEmail}
        setValidEmail={setValidEmail}
        validPassword={validPassword}
        setValidPassword={setValidPassword}
        changeForm={addFill}
        objValues={formObjectState}
        isLoginFormActive={isLoginFormActive}
      />
      <SignUpButton
        prueba={showObj}
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
});

export default LoginView;
