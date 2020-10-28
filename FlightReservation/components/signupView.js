import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ModalCustom from './modalComponent';
import SignUpButton from './signUpButtons';
import Form from './formComponent';


function Terms(props) {
  const { changeForm, objValues } = props;
  return (
    <View style={[styles.containerForm, { marginTop: 30 }]}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objValues.agreed}
          onValueChange={(value) => changeForm('agreed', value)}
          style={styles.checkbox}
          tintColors={{ true: '#3E59F7', false: 'black' }}
        />
        <Text style={styles.labelCheckBox}>
          I agree to the <Text style={{ textDecorationLine: 'underline' }}>Terms</Text> and <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy.</Text>*
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objValues.subscribed}
          onValueChange={(value) => changeForm('subscribed', value)}
          style={styles.checkbox}
          tintColors={{ true: '#3E59F7', false: 'black' }}
        />
        <Text style={styles.labelCheckBox}>
          Subscribe for select products and updates
        </Text>
      </View>
    </View>
  );
}

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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    margin: 8,
    width: '100%',
  },
  labelCheckBox: {
    fontSize: 15,
    margin: 8,
    color: '#818181',
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default SignupForm;
