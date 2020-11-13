import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from '../src/colors';
import strings from '../src/strings';
import PropTypes from 'prop-types';

function Terms(props) {
  const {changeForm, objValues} = props;
  return (
    <View style={[styles.containerForm, {marginTop: 30}]}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={objValues.agreed}
          onValueChange={(value) => changeForm('agreed', value)}
          style={styles.checkbox}
          tintColors={{true: colors.bluePrimary, false: 'black'}}
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
          tintColors={{true: colors.bluePrimary, false: 'black'}}
        />
        <Text style={styles.labelCheckBox}>{strings.subscribe}</Text>
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
    color: colors.gray,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

Terms.propTypes = {
  changeForm: PropTypes.func,
  objValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    subscribed: PropTypes.bool,
    agreed: PropTypes.bool,
  }),
};

export default Terms;
