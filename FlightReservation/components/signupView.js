import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
 
} from 'react-native';
import ModalCustom from './modalComponent';
import SignUpButton from './signUpButtons';
import Form from './formComponent';
import Terms from './termsComponent';



function SignupForm() {
  const formObject = {
    name: '',
    email: '',
    password: '',
    agreed: false,
    subscribed: false,
  };
  const [formObjectState, setFormObjectState] = useState(formObject);

  const [modalVisible, setModalVisible] = useState(false);
  const [singedText, setSignetText] = useState("Singing up...")
  const [isIconCheck, setIsIconCheck] = useState(true);

  const addFill = (propierty, value) => {
    setFormObjectState({
      ...formObjectState,
      [propierty]: value,
    });
    //showObj();
  };

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
    <View>
      <Text style={styles.header}>Sign Up</Text>
      <Form  changeForm={addFill} objValues={formObjectState} />
      <Terms changeForm={addFill} objValues={formObjectState} />
      <SignUpButton prueba={showObj} objValues={formObjectState} showModal={showModal}/>
      <View>
        <ModalCustom modalVisible={modalVisible} text={singedText} isIconCheck={isIconCheck} />
      </View>
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
  containerForm: {
    marginHorizontal: 15,
  },

});

export default SignupForm;
