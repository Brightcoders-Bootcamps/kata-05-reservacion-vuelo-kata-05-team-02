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

function Terms(props) {
  const {changeForm, objValues} = props;
  return (
    <View style={[styles.containerForm, {marginTop: 30}]}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objValues.agreed}
          onValueChange={(value) => changeForm('agreed', value)}
          style={styles.checkbox}
          tintColors={{true: '#3E59F7', false: 'black'}}
        />
        <Text style={styles.labelCheckBox}>
          I agree to the{' '}
          <Text style={{textDecorationLine: 'underline'}}>Terms</Text> and{' '}
          <Text style={{textDecorationLine: 'underline'}}>Privacy Policy.</Text>
          *
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

const styles = StyleSheet.create({
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

export default Terms;
