import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../src/colors';
import NumberPicker from '../components/flightsComponents/numberPicker';
import LocationComponent from '../components/flightsComponents/locationComponent';
import AirplaneIcon from '../components/flightsComponents/airplaneIcon';
import TitleFlight from '../components/flightsComponents/titleFlight';
import BtnNext from '../components/flightsComponents/btnNext';

const PassengerScreen = () => {
  return (
    <View
      style={{
        padding: 30,
      }}>
      <View style={[style.rowDirection, style.travelBottom]}>
        <LocationComponent city="Beg" country="Serbia" side="left" />
        <AirplaneIcon />
        <LocationComponent city="Beg" country="Serbia" side="right" />
      </View>
      <TitleFlight title={'How many passengers?'} marginTop={20} />
      <NumberPicker />
      <BtnNext marginTop={200} />
    </View>
  );
};

const style = StyleSheet.create({
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
    marginTop: '50%',
  },
  nextBtnContent: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  travelBottom: {
    paddingBottom: 10,
    borderColor: colors.myflightsDivision,
    borderBottomWidth: 2,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  origin: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  originComplete: {
    fontWeight: '200',
  },
  font16: {
    fontSize: 16,
  },
  iconCheck: {
    tintColor: colors.bluePrimary,
    height: 20,
    width: 25,
  },
});

export default PassengerScreen;
