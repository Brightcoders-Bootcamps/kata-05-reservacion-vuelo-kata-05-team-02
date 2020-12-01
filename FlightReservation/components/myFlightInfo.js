import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import airplane from '../img/flight.png';
import colors from '../src/colors';
import TripInfo from '../components/tripInfo';

function MyFlightInfo(props) {
  return (
    <View style={{paddingLeft: 25, paddingRight: 25}}>
      <TripInfo borderBtm={1} marginTop={0} />
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
