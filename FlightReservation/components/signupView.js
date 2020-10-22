import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

function Form() {
  const [isSeePassword, setSeePassword] = useState(true);
  const [formData, setFormData] = useState(defaultValue());
  const [formEmpty, setFormEmpty] = useState({});

  function defaultValue() {
    return {
      name: '',
      email: '',
      password: '',
    };
  }

  const changeSeePassword = () => {
    setSeePassword(!isSeePassword);
  };

  const changeInputName = (e) => {
    setFormData({...formData, name: e.nativeEvent.text});

    if (!formData.name) {
      formEmpty.name = true;
      setFormEmpty(formEmpty);
    } else {
      formEmpty.name = false;
      setFormEmpty(formEmpty);
    }
  };

  return (
    <View style={styles.containerForm}>
      <Text style={styles.inputHeader}>First Name</Text>
      <TextInput
        style={[styles.inputStyle, formEmpty.name && styles.changeBorderInput]}
        onChange={(e) => changeInputName(e)}></TextInput>
      <Text style={styles.inputHeader}>Email *</Text>
      <TextInput style={styles.inputStyle}></TextInput>
      <Text style={styles.inputHeader}>Password *</Text>
      <View style={styles.containerPassword}>
        <TextInput
          style={styles.inputPassword}
          secureTextEntry={isSeePassword}
        />
        <View style={styles.containerIconPassword}>
          <Pressable onPress={changeSeePassword}>
            <Image
              style={styles.iconSeePassword}
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

function Terms() {
  const [isTermsSelected, setTermsSelection] = useState(false);
  const [isSubscribeSelected, setSubscribeSelection] = useState(false);

  return (
    <View style={styles.containerForm}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isTermsSelected}
          onValueChange={setTermsSelection}
          style={styles.checkbox}
          tintColors={{true: '#3E59F7', false: 'black'}}
        />
        <Text style={styles.labelCheckBox}>
          I agree to the Terms and Privacy Policy *
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSubscribeSelected}
          onValueChange={setSubscribeSelection}
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

function SignUpButton() {
  return (
    <View style={styles.containerForm}>
        <View style={styles.containerButtonsSignUp}>
            <View style={styles.ContainerOfButtonSignUp}>
                <Pressable>
                    <Text style={styles.textButtons}>Sign Up</Text>
                </Pressable>
            </View>            
        </View>
        <View style={styles.ContainerOfButtonSignUpGoogle}>        
            <View style={styles.viewIconGoogle}>
                <Image
                    style={styles.iconGoogle}
                    source={require('../img/google.png')}
                />
            </View>              
            <Text style={styles.textButtons}>Sign Up with Google</Text>                       
        </View>     
    </View>
  );
}

function SignupForm() {
  return (
    <View>
      <Text style={styles.header}>Sign Up</Text>
      <Form />
      <Terms />
      <SignUpButton />
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
    backgroundColor: '#B6B7BA',
    borderRadius: 10,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textButtons: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 'bold',
      width : '80%'
  },
  ContainerOfButtonSignUpGoogle: {
    backgroundColor: '#B6B7BA',
    borderRadius: 10,
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: 20,
    height: 50,
    marginTop:10,    
    alignItems: 'center'
  },
  containerButtonsSignUp:{
      alignItems: 'center',
  },
  viewIconGoogle:{
      width: '20%',
      alignItems: 'center',
  }

});

export default SignupForm;
