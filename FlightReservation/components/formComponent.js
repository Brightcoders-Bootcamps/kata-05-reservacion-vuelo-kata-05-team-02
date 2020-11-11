import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

function Form(props) {
  const {changeForm, objValues, isLoginFormActive} = props;
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
    changeForm(property, textInput);
    const color = !textInput ? '#818181' : '#5B6EF8';
    setBorderColor({
      ...borderColor,
      [propertyBorder]: color,
    });
  };

  return (
    <View style={styles.containerForm}>
      {!isLoginFormActive && (
        <View>
          <Text style={styles.inputHeader}>First Name</Text>
          <TextInput
            style={[
              styles.inputStyle,
              {borderColor: borderColor.borderColorName},
            ]}
            onChange={(e) =>
              checkInputsIsNull(e, 'name', 'borderColorName')
            }></TextInput>
        </View>
      )}
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.inputHeader}>Email</Text>
        <Text style={validEmail ? {color: 'gray'} : styles.errorText}>*</Text>
        {!validEmail && (
          <Text style={styles.errorText}>
            Email in use. Use a different email
          </Text>
        )}
      </View>
      <TextInput
        style={[styles.inputStyle, {borderColor: borderColor.borderColorEmail}]}
        onChange={(e) =>
          checkInputsIsNull(e, 'email', 'borderColorEmail')
        }></TextInput>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.inputHeader}>Password</Text>
        <Text style={validPassword ? {color: 'gray'} : styles.errorText}>
          *
        </Text>
        {!validPassword && (
          <Text style={styles.errorText}>Incorrect email and/or password</Text>
        )}
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
const styles = StyleSheet.create({
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
    borderRadius: 3,
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
  },
  errorText: {
    color: '#FF80A0',
    fontSize: 16,
    marginLeft: 4,
  },
});

export default Form;
