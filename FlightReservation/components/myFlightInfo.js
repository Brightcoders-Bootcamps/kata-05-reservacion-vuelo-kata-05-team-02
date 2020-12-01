import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import airplane from '../img/flight.png';
import colors from '../src/colors';
import LocationComponent from './flightsComponents/locationComponent';
import AirplaneIcon from './flightsComponents/airplaneIcon';
import DateFlight from './flightsComponents/dateFlight';
import NumPassengers from './flightsComponents/numPassengers';
import TripInfo from '../components/tripInfo';

function MyFlightInfo(props) {
  const {item} = props;

  const originLocationArray = item.origin.split(',');
  const originCity = originLocationArray[0];
  const originCountry = originLocationArray[1];
  const destinationLocationArray = item.destination.split(',');
  const destinationCity = destinationLocationArray[0];
  const destinationCountry = destinationLocationArray[1];
  const tripDate = item.date;
  const passengers = item.passengers;

  return (
    <View style={{paddingLeft: 25, paddingRight: 25}}>
      <TripInfo
        borderBtm={1}
        marginTop={0}
        originCity={originCity}
        originCountry={originCountry}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
        tripDate={tripDate}
        passengers={passengers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  padding25: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  header: {
    fontSize: 30,
    color: colors.bluePrimary,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 35,
  },
  travelBottom: {
    paddingBottom: 10,
    borderColor: colors.myflightsDivision,
    borderBottomWidth: 2,
  },
  dateBottom: {
    marginTop: 15,
    borderBottomWidth: 1,
    paddingBottom: 25,
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

export default MyFlightInfo;
