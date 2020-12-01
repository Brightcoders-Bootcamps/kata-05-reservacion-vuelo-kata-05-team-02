import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import colors from '../../src/colors';

function BtnNext(props) {
  const {marginTop} = props
  return (
    <View>
      <TouchableOpacity style={[style.nextBtnStyle,{marginTop:marginTop}]}>
        <Text style={style.nextBtnContent}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  nextBtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: colors.grayLight,
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
