import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../src/colors';
import LocationComponent from './flightsComponents/locationComponent';
import AirplaneIcon from './flightsComponents/airplaneIcon';
import DateFlight from './flightsComponents/dateFlight';
import NumPassengers from './flightsComponents/numPassengers';

function MyFlightInfo(props) {
  return (
    <View style={{paddingLeft: 25, paddingRight: 25}}>
      <View style={[styles.rowDirection, styles.travelBottom]}>
        <LocationComponent city="BEG" country="Serbia" side="left" />
        <AirplaneIcon />
        <LocationComponent city="AMS" country="Netherlands" side="right" />
      </View>
      <View style={[styles.rowDirection, styles.dateBottom]}>
        <DateFlight date={'September 3, 2020'} />
        <NumPassengers num={3} />
      </View>
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
