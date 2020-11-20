import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyFlightInfo from '../components/myFlightInfo';
import colors from '../src/colors';

const ConfirmationScreen = () => {
  return (
    <View
      style={{
        padding: 30,
      }}>
      <View style={{marginTop: 250}}>
        <MyFlightInfo />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 50,
        }}>
        <Text style={style.titleFont}>Your requested was received</Text>
      </View>
      <View>
        <TouchableOpacity style={style.nextBtnStyle}>
          <Text style={style.nextBtnContent}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = {
  titleFont: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  nextBtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: colors.grayLight,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
  },
  nextBtnContent: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
};
export default ConfirmationScreen;
