import React, {useState} from 'react';
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

function Form(props) {
  const {changeForm, objValues} = props;
  const [isSeePassword, setSeePassword] = useState(true);
  const changeSeePassword = () => {
    setSeePassword(!isSeePassword);
  };
  const inputBorderColor = {
    borderColorName: 'black',
    borderColorEmail: 'black',
    borderColorPassword: 'black',
  };
  const [borderColor, setBorderColor] = useState(inputBorderColor);

  const checkInputsIsNull = (e, property, propertyBorder) => {
    const textInput = e.nativeEvent.text;
    console.log(textInput, property, propertyBorder);
    changeForm(property, textInput);
    const color = !textInput ? 'black' : '#5B6EF8';
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
        style={[styles.inputStyle, {borderColor: borderColor.borderColorName}]}
        onChange={(e) =>
          checkInputsIsNull(e, 'name', 'borderColorName')
        }></TextInput>
      <Text style={styles.inputHeader}>Email *</Text>
      <TextInput
        style={[styles.inputStyle, {borderColor: borderColor.borderColorEmail}]}
        onChange={(e) =>
          checkInputsIsNull(e, 'email', 'borderColorEmail')
        }></TextInput>
      <Text style={styles.inputHeader}>Password *</Text>
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
                {tintColor: borderColor.borderColorPassword},
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
  const {changeForm, objValues} = props;
  return (
    <View style={styles.containerForm}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objValues.agreed}
          onValueChange={(value) => changeForm('agreed', value)}
          style={styles.checkbox}
          tintColors={{true: '#3E59F7', false: 'black'}}
        />
        <Text style={styles.labelCheckBox}>
          I agree to the Terms and Privacy Policy *
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objValues.subscribed}
          onValueChange={(value) => changeForm('subscribed', value)}
          style={styles.checkbox}
          tintColors={{true: '#3E59F7', false: 'black'}}
        />
        <Text style={styles.labelCheckBox}>
          Subscribe for select products and updates
        </Text>
      </View>
    </View>
  );
}

function SignUpButton(props) {
  const {objValues} = props;
  const [classColor, setClassColor] = useState('#B6B7BA');
  const [buttonDisable, setButtonDisable] = useState(true);

  React.useEffect(() => {
    checkNulls();
  });
  const checkNulls = () => {
    if (
      !objValues.name ||
      !objValues.email ||
      !objValues.password ||
      !objValues.agreed
    ) {
      setClassColor('#B6B7BA');
      setButtonDisable(true);
    } else {
      setClassColor('#5B6EF8');
      setButtonDisable(false);
    }
  };
  return (
    <View style={styles.containerForm}>
      <TouchableOpacity
        disabled={buttonDisable}
        onPress={checkNulls}
        style={[
          styles.ContainerOfButtonSignUp,
          styles.containerForm,
          {backgroundColor: classColor},
        ]}>
        <View>
          <Text style={styles.textButtons}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text style={{color: '#818181', fontSize: 20}}>or</Text>
      </View>
      <TouchableOpacity disabled={buttonDisable} onPress={props.prueba}>
        <View
          style={[
            styles.ContainerOfButtonSignUpGoogle,
            {backgroundColor: classColor},
          ]}>
          <View style={styles.viewIconGoogle}>
            <Image
              style={styles.iconGoogle}
              source={require('../img/google.png')}
            />
          </View>
          <Text style={[styles.textButtons, {paddingLeft: 25}]}>
            Sign Up with Google
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.containerForm,
          {flexDirection: 'row', marginTop: 10, justifyContent: 'center'},
        ]}>
        <Text style={{color: '#B6B7BA'}}>Already have an account? </Text>
        <Text
          style={{color: 'blue'}}
          onPress={() => console.log('HELLOOOOOOOOOOOOOOOOOOOOO')}>
          Log In
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
    fontSize: 30,
    color: '#3E59F7',
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 10,
  },
  inputHeader: {
    fontSize: 20,
    color: '#818181',
    marginBottom: 10,
    width: '100%',
  },
  instruccionsPassword: {
    fontSize: 15,
    color: '#818181',
    marginBottom: 10,
    width: '100%',
    textAlign: 'justify',
  },
  inputStyle: {
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    width: '100%',
    marginBottom: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
  },
  inputPassword: {
    color: 'black',
    fontWeight: 'bold',
    height: 60,
    width: '85%',
    marginBottom: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 18,
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
    marginBottom: 20,
    width: '100%',
  },
  labelCheckBox: {
    margin: 8,
    fontSize: 16,
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
    height: 60,
    borderRightWidth: 1,
    borderRightColor: 'black',
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  iconSeePassword: {
    tintColor: 'gray',
    height: 30,
    width: 30,
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
    fontSize: 18,
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
});

export default SignupForm;
