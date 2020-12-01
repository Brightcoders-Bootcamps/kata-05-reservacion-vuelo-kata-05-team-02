import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import colors from '../../src/colors';
import strings from '../../src/strings';

function InputFlight(props) {
  const {location, onChangeLocation} = props;

  return (
    <View style={style.container}>
      <TextInput
        placeholder={strings.selectPLace}
        style={[
          style.textInput,
          {
            borderBottomColor: location ? colors.bluePrimary : colors.grayLight,
          },
        ]}
        onChange={(e) => onChangeLocation(e.nativeEvent.text)}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    marginTop: 100,
    fontSize: 20,
    width: '100%',
  },
});

export default InputFlight;
