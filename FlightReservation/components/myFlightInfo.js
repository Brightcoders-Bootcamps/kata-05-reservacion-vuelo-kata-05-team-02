import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../src/colors';
import LocationComponent from './flightsComponents/locationComponent';
import AirplaneIcon from './flightsComponents/airplaneIcon';
import DateFlight from './flightsComponents/dateFlight';
import NumPassengers from './flightsComponents/numPassengers';
import TripInfo from '../components/tripInfo';

function MyFlightInfo(props) {
  return (
    <View style={{paddingLeft: 25, paddingRight: 25}}>
      <TripInfo borderBtm={1} marginTop={0} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default MyFlightInfo;
