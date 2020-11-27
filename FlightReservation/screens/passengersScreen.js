import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../src/colors';
import NumberPicker from '../components/flightsComponents/numberPicker';
import LocationComponent from '../components/flightsComponents/locationComponent';
import AirplaneIcon from '../components/flightsComponents/airplaneIcon';
import TitleFlight from '../components/flightsComponents/titleFlight';
import BtnNext from '../components/flightsComponents/btnNext';
import TripInfo from '../components/tripInfo';

const PassengerScreen = (props) => {
  const {
    originLocation,
    destinationLocation,
    tripDate,
    passengers,
    setPassengers,
    setScreenName,
    fillInfo,
    registerTrip
  } = props;

  const originLocationArray = originLocation.split(',');
  const originCity = originLocationArray[0];
  const originCountry = originLocationArray[1];
  const destinationLocationArray = destinationLocation.split(',');
  const destinationCity = destinationLocationArray[0];
  const destinationCountry = destinationLocationArray[1];

  return (
    <View
      style={{
        padding: 30,
      }}>
      <TripInfo
        borderBtm={0}
        marginTop={0}
        originCity={originCity}
        originCountry={originCountry}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
        tripDate={tripDate}
      />
      <TitleFlight title={'How many passengers?'} marginTop={20} />
      <View style={{marginTop: 100}}>
        <NumberPicker setPassengers={setPassengers} fillInfo={fillInfo} />
      </View>
      <BtnNext
        enable={passengers}
        setScreenName={registerTrip}
        nextScreen={'confirmationscreen'}
        marginTop={200}
      />
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
