import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../src/colors';
import BtnNext from '../components/flightsComponents/btnNext';
import TitleFlight from '../components/flightsComponents/titleFlight';
import InputFlight from '../components/flightsComponents/inputFlight';
import LocationComponent from '../components/flightsComponents/locationComponent';
import AirplaneIcon from '../components/flightsComponents/airplaneIcon';
const OriginScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.rowDirection, style.travelBottom]}>
        <LocationComponent city="BEG" country="Serbia" side="left" />
        <AirplaneIcon />
      </View>
      <TitleFlight title={'Where will you be flying to? '} marginTop={20} />
      <InputFlight />
      <BtnNext marginTop={250}/>
    </View>
  );
};
const style = StyleSheet.create({
  travelBottom: {
    paddingBottom: 10,
    borderColor: colors.myflightsDivision,
    borderBottomWidth: 1,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  container: {
    padding: 30,
  },
});

export default OriginScreen;
