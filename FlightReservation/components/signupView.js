import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ModalCustom from './modalComponent';
import SignUpButton from './signUpButtons';
import Form from './formComponent';
import Terms from './termsComponents';
import colors from '../src/colors';
import strings from '../src/strings';
import PropTypes from 'prop-types';


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
  console.log(singedText)

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

SignupForm.propTypes = {
  signUpGoogle: PropTypes.func,
  validEmail: PropTypes.bool,
  setValidEmail: PropTypes.func, 
  validPassword: PropTypes.bool,
  setValidPassword: PropTypes.func,
  setIsLoginFormActive: PropTypes.func,
  isLoginFormActive: PropTypes.bool,
  showModal: PropTypes.func,
  addFill: PropTypes.func,
  formObjectState: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    subscribed: PropTypes.bool,
    agreed: PropTypes.bool,
  }),
  modalVisible: PropTypes.bool,
  singedText: PropTypes.string,
  isIconCheck: PropTypes.bool,

}
export default SignupForm;
