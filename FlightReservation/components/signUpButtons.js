import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../src/colors';

function SignUpButton(props) {
  const {
    objValues,
    showModal,
    setIsLoginFormActive,
    isLoginFormActive,
    signUpGoogle,
  } = props;
  const [classColor, setClassColor] = useState(colors.gray);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [classColorGoogle, setClassColorGoogle] = useState(colors.gray);
  const [buttonDisableGoogle, setButtonDisableGoogle] = useState(true);

  React.useEffect(() => {
    checkNulls();
    checkNullsGoogle();
  });
  const checkNulls = () => {
    if (
      !objValues.name ||
      !objValues.email ||
      !objValues.password ||
      !objValues.agreed ||
      !objValues.subscribed
    ) {
      setClassColor(colors.grayLight);
      setButtonDisable(true);
    } else {
      setClassColor(colors.blue);
      setButtonDisable(false);
    }
  };

  const checkNullsGoogle = () => {
    if (!objValues.agreed || !objValues.subscribed) {
      setClassColorGoogle(colors.grayLight);
      setButtonDisableGoogle(true);
    } else {
      setClassColorGoogle(colors.blue);
      setButtonDisableGoogle(false);
    }
  };
  return (
    <View style={[styles.containerForm, {marginTop: 20}]}>
      <TouchableOpacity
        disabled={buttonDisable}
        onPress={showModal}
        style={[
          styles.ContainerOfButtonSignUp,
          styles.containerForm,
          {backgroundColor: classColor, borderWidth: 0},
        ]}>
        <View>
          <Text style={styles.textButtons}>
            {isLoginFormActive ? 'Log In' : 'Sign Up'}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center', margin: 10}}>
        <Text style={{color: colors.grayLight, fontSize: 15}}>or</Text>
      </View>
      <TouchableOpacity
        disabled={buttonDisableGoogle}
        onPress={() => signUpGoogle()}>
        <View
          style={[
            styles.ContainerOfButtonSignUpGoogle,
            {backgroundColor: classColorGoogle},
          ]}>
          <View style={styles.viewIconGoogle}>
            <Image
              style={styles.iconGoogle}
              source={require('../img/google.png')}
            />
          </View>
          <Text style={[styles.textButtons, {paddingLeft: 25}]}>
            {isLoginFormActive ? 'Log In' : 'Sign Up'} with Google
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.containerForm,
          {flexDirection: 'row', marginTop: 10, justifyContent: 'center'},
        ]}>
        <Text style={{color: colors.grayLight, fontSize: 15}}>
          {' '}
          {isLoginFormActive
            ? 'Do not have an account?'
            : 'Already have an account'}{' '}
        </Text>

        <Text
          style={{color: colors.blue, textDecorationLine: 'underline'}}
          onPress={() => setIsLoginFormActive(!isLoginFormActive)}>
          {' '}
          {isLoginFormActive ? 'Sign Up' : 'Log in'}{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    marginHorizontal: 15,
  },
  iconGoogle: {
    height: 30,
    width: 30,
  },
  ContainerOfButtonSignUp: {
    borderRadius: 10,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textButtons: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    width: '80%',
  },
  viewIconGoogle: {
    width: '20%',
    alignItems: 'center',
  },
  ContainerOfButtonSignUpGoogle: {
    backgroundColor: colors.grayLight,
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
});

export default SignUpButton;
