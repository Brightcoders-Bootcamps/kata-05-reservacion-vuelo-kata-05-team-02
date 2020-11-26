import React, {useState} from 'react';
import {View} from 'react-native';
import colors from '../src/colors';
import TitleFlight from '../components/flightsComponents/titleFlight';
import BtnNext from '../components/flightsComponents/btnNext';
import TripInfo from '../components/tripInfo';

const ConfirmationScreen = (props) => {
  const {
    originLocation,
    destinationLocation,
    tripDate,
    passengers,
    setScreenName,
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
        marginTop={200}
        originCity={originCity}
        originCountry={originCountry}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
        tripDate={tripDate}
        passengers={passengers}
      />
      <TitleFlight title={'Your requested was received.'} marginTop={20} />
      <BtnNext
        enable={true}
        finish={true}
        setScreenName={setScreenName}
        nextScreen={'confirmationscreen'}
        marginTop={180}
      />
    </View>
  );
};
const style = {
  titleFont: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  travelBottom: {
    paddingBottom: 10,
    borderColor: colors.myflightsDivision,
    borderBottomWidth: 2,
    marginTop: 200,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateBottom: {
    marginTop: 15,
    paddingBottom: 25,
  },
};
export default ConfirmationScreen;
