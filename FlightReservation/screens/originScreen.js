import React, {useState} from 'react';
import {LogBox, View, Text, TextInput} from 'react-native';

const OriginScreen = () => {
  return (
    <View
      style={{
        padding: 30,
      }}>
      <View style={{
        paddingHorizontal:20,
        marginTop:150,
      }}>
        <Text style={style.titleFont}>Where are you now? </Text>
      </View>
      <View style={{
          margin:20
      }}>
        <TextInput placeholder="Select a location">

        </TextInput>
      </View>
    </View>
  );
};
const style = {
  titleFont: {
    fontSize: 35,
    fontWeight: 'bold',
  },
};

export default OriginScreen;
