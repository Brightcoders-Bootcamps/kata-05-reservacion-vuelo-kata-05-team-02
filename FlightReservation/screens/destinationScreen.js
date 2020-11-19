import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../src/colors';
import airplane from '../img/flight.png';

const OriginScreen = () => {
  return (
    <View
      style={{
        padding: 30,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={style.travelBottom}>
          <Text style={style.origin}>BEG</Text>
          <Text style={[style.originComplete, style.font16]}>Serbia</Text>
        </View>
        <View>
          <Image style={[style.iconCheck, {marginTop: 70}]} source={airplane} />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 50,
        }}>
        <Text style={style.titleFont}>Where will you be flying to? </Text>
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
    marginTop: '60%',
  },
  nextBtnContent: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  origin: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  originComplete: {
    fontWeight: '200',
    paddingHorizontal: 20,
  },
  travelBottom: {
    paddingBottom: 10,
    
    borderColor: colors.myflightsDivision,
    borderBottomWidth: 1,
  },
  font16: {
    fontSize: 16,
  },
  iconCheck: {
    tintColor: colors.bluePrimary,
    marginLeft: 60,
    height: 20,
    width: 25,
  },
};

export default OriginScreen;
