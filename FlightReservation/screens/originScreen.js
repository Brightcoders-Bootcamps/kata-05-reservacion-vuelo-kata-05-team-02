import React, {useState} from 'react';
import {View} from 'react-native';
import BtnNext from '../components/flightsComponents/btnNext';
import TitleFlight from '../components/flightsComponents/titleFlight';
import InputFlight from '../components/flightsComponents/inputFlight';
const OriginScreen = () => {
  return (
    <View style={style.container}>
      <TitleFlight title={'Where are you now?'} marginTop={150} />
      <InputFlight />      
      <BtnNext marginTop={250}/>
    </View>
  );
};
const style = {
  container: {
    padding: 30,
  },
};

export default OriginScreen;
