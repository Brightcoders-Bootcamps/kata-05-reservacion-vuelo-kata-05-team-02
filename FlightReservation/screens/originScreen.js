import React, {useState} from 'react';
import {LogBox, View, Text, TextInput, TouchableOpacity} from 'react-native';
import colors from '../src/colors';
const OriginScreen = () => {
  return (
    <View
      style={{
        padding: 30,
      }}>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 150,
        }}>
        <Text style={style.titleFont}>Where are you now? </Text>
      </View>
      <View
        style={{
          margin: 20,
        }}>
        <TextInput
          placeholder="Select a location"
          style={style.textInput}></TextInput>
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
  textInput: {
    borderBottomColor: colors.grayLight,
    borderBottomWidth: 1,
    marginTop: 100,
    fontSize: 20,
    width: '115%',
  },
  nextBtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: colors.grayLight,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  nextBtnContent: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
};

export default OriginScreen;
