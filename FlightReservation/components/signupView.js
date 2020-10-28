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
  Modal,
  ActivityIndicator,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

function Form(props) {
  const { changeForm, objValues } = props;
  const [isSeePassword, setSeePassword] = useState(true);

  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const changeSeePassword = () => {
    setSeePassword(!isSeePassword);
  };
  const inputBorderColor = {
    borderColorName: '#818181',
    borderColorEmail: '#818181',
    borderColorPassword: '#818181',
  };
  const [borderColor, setBorderColor] = useState(inputBorderColor);

  const checkInputsIsNull = (e, property, propertyBorder) => {
    const textInput = e.nativeEvent.text;
    console.log(textInput, property, propertyBorder);
    changeForm(property, textInput);
    const color = !textInput ? '#818181' : '#5B6EF8';
    console.log(color);
    setBorderColor({
      ...borderColor,
      [propertyBorder]: color,
    });
  };

  return (
    <View style={styles.containerForm}>
      <Text style={styles.inputHeader}>First Name</Text>
      <TextInput
        style={[styles.inputStyle, { borderColor: borderColor.borderColorName }]}
        onChange={(e) =>
          checkInputsIsNull(e, 'name', 'borderColorName')
        }></TextInput>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.inputHeader}>Email</Text>
        <Text style={validEmail ? { color: "gray" } : styles.errorText}>*</Text>
        {!validEmail && <Text style={styles.errorText}>Email in use. Use a different email</Text>}
      </View>
      <TextInput
        style={[styles.inputStyle, { borderColor: borderColor.borderColorEmail }]}
        onChange={(e) =>
          checkInputsIsNull(e, 'email', 'borderColorEmail')
        }></TextInput>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.inputHeader}>Password</Text>
        <Text style={validPassword ? { color: "gray" } : styles.errorText}>*</Text>
        {!validPassword && <Text style={styles.errorText}>Incorrect email and/or password</Text>}
      </View>
      <View style={styles.containerPassword}>
        <TextInput
          style={[
            styles.inputPassword,
            {
              borderTopColor: borderColor.borderColorPassword,
              borderBottomColor: borderColor.borderColorPassword,
              borderLeftColor: borderColor.borderColorPassword,
            },
          ]}
          secureTextEntry={isSeePassword}
          onChange={(e) =>
            checkInputsIsNull(e, 'password', 'borderColorPassword')
          }
        />

        <View
          style={[
            styles.containerIconPassword,
            {
              borderRightColor: borderColor.borderColorPassword,
              borderTopColor: borderColor.borderColorPassword,
              borderBottomColor: borderColor.borderColorPassword,
            },
          ]}>
          <Pressable onPress={changeSeePassword}>
            <Image
              style={[
                styles.iconSeePassword,
                { tintColor: borderColor.borderColorPassword },
              ]}
              source={require('../img/ojo-grey.png')}
            />
          </Pressable>
        </View>
      </View>
      <Text style={styles.instruccionsPassword}>
        Use 8 or more characters with a mix of letters, numbers, and symbols
      </Text>
    </View>
  );
}

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

function ModalCustom(props) {
  const { modalVisible, text, isIconCheck } = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        hasBackdrop={true}
        backdropColor='black'
        backdropOpacity={0.70}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: "black" }]}>
            {isIconCheck 
              ? <AnimatedCircularProgress
                size={80}
                width={8}
                fill={100}
                tintColor="#5362D8"
                backgroundColor="#3d5875" 
                duration={2500}
                />
              : <Image
                  style={styles.iconCheck}
                  source={require('../img/check.png')}
                />
            }            
            <Text style={styles.modalText}>{text}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function SignUpButton(props) {
  const { objValues } = props;
  const [classColor, setClassColor] = useState('#B6B7BA');
  const [buttonDisable, setButtonDisable] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [singedText, setSignetText] = useState("Singing up...")
  const [isIconCheck, setIsIconCheck] = useState(true);

  React.useEffect(() => {
    checkNulls();
  });
  const checkNulls = () => {
    if (
      !objValues.name ||
      !objValues.email ||
      !objValues.password ||
      !objValues.agreed ||
      !objValues.subscribed
    ) {
      setClassColor('#B6B7BA');
      setButtonDisable(true);
    } else {
      setClassColor('#5B6EF8');
      setButtonDisable(false);
    }
  };

  const showModal = () => {
    setModalVisible(true);

    setTimeout(function () {
      setSignetText("Signed UP");
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
      <View>
        <ModalCustom modalVisible={modalVisible} text={singedText} isIconCheck={isIconCheck} />
      </View>
      <View style={[styles.containerForm, { marginTop: 20 }]}>
        <TouchableOpacity
          disabled={buttonDisable}
          onPress={showModal}
          style={[
            styles.ContainerOfButtonSignUp,
            styles.containerForm,
            { backgroundColor: classColor, borderWidth: 0 },
          ]}>
          <View>
            <Text style={styles.textButtons}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', margin: 10 }}>
          <Text style={{ color: '#C9CED6', fontSize: 15 }}>or</Text>
        </View>
        <TouchableOpacity disabled={buttonDisable} onPress={props.prueba}>
          <View
            style={[
              styles.ContainerOfButtonSignUpGoogle,
              { backgroundColor: classColor },
            ]}>
            <View style={styles.viewIconGoogle}>
              <Image
                style={styles.iconGoogle}
                source={require('../img/google.png')}
              />
            </View>
            <Text style={[styles.textButtons, { paddingLeft: 25 }]}>
              Sign Up with Google
          </Text>
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.containerForm,
            { flexDirection: 'row', marginTop: 10, justifyContent: 'center' },
          ]}>
          <Text style={{ color: '#B6B7BA', fontSize: 15 }}>Already have an account? </Text>
          <Text
            style={{ color: 'blue', textDecorationLine: 'underline' }}
            onPress={() => console.log('HELLOOOOOOOOOOOOOOOOOOOOO')}>
            Log In
        </Text>
        </View>
      </View>
    </>
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

  const addFill = (propierty, value) => {
    setFormObjectState({
      ...formObjectState,
      [propierty]: value,
    });
    showObj();
  };

  const showObj = () => {
    console.log(formObjectState);
  };

  return (
    <View>
      <Text style={styles.header}>Sign Up</Text>
      <Form changeForm={addFill} objValues={formObjectState} />
      <Terms changeForm={addFill} objValues={formObjectState} />
      <SignUpButton prueba={showObj} objValues={formObjectState} />
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
  inputHeader: {
    fontSize: 16,
    color: '#818181',
    marginBottom: 10,
  },
  instruccionsPassword: {
    fontSize: 13,
    color: '#818181',
    marginBottom: 10,
    width: '100%',
    textAlign: 'justify',
  },
  inputStyle: {
    color: 'black',
    fontWeight: 'bold',
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 3
  },
  inputPassword: {
    color: 'black',
    fontWeight: 'bold',
    height: 52,
    width: '85%',
    marginBottom: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 16,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
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
  containerPassword: {
    flexDirection: 'row',
  },
  containerIconPassword: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    width: '15%',
    height: 52,
    borderRightWidth: 1,
    borderRightColor: 'black',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  iconSeePassword: {
    tintColor: 'gray',
    height: 20,
    // width: 30,
  },
  iconCheck: {
    tintColor: '#5362D8',
    height: 80,
    width: 80,
  },
  iconGoogle: {
    height: 30,
    width: 30,
  },
  changeBorderInput: {
    borderWidth: 1,
    borderColor: '#940C0C',
  },
  ContainerOfButtonSignUp: {
    //backgroundColor: '#B6B7BA',
    borderRadius: 10,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textButtons: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    width: '80%',
  },
  ContainerOfButtonSignUpGoogle: {
    backgroundColor: '#B6B7BA',
    borderRadius: 10,
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 20,
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerButtonsSignUp: {
    alignItems: 'center',
  },
  viewIconGoogle: {
    width: '20%',
    alignItems: 'center',
  },
  errorText: {
    color: '#FF80A0',
    fontSize: 16,
    marginLeft: 4
  },

  //Estilos de modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    paddingBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginTop: 15,
    marginBottom: 15,
    color: "#5B6EF8",
    textAlign: "center"
  }
});

export default SignupForm;
