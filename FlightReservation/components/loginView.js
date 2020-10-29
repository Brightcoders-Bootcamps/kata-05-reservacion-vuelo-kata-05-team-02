import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import FormComponent from './formComponent';
function LoginView(props) {
  const {isLoginFormActive} = props;
  
  return (
    <View>
      <Text style={styles.header}>Log In</Text>
      <FormComponent />
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
});

export default LoginView;