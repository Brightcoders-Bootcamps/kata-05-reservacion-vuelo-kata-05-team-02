import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import colors from '../../src/colors';

function BtnNext(props) {
  const {location, marginTop, setScreenName, nextScreen} = props;
  return (
    <View>
      <TouchableOpacity
        style={[
          style.nextBtnStyle,
          {
            marginTop: marginTop,
            backgroundColor: location ? colors.bluePrimary : colors.grayLight,
          },
        ]}
        disabled={location ? false : true}
        onPress={() => setScreenName(nextScreen)}>
        <Text style={style.nextBtnContent}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  nextBtnStyle: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtnContent: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default BtnNext;
