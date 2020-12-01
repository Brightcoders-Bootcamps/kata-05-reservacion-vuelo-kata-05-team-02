import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../src/colors';
import airplane from '../img/flight.png';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import BtnNext from '../components/flightsComponents/btnNext';
import TitleFlight from '../components/flightsComponents/titleFlight';
import AirplaneIcon from '../components/flightsComponents/airplaneIcon';
import LocationComponent from '../components/flightsComponents/locationComponent';
const DateScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.rowDirection, style.travelBottom]}>
        <LocationComponent city="BEG" country="Serbia" side="left" />
        <AirplaneIcon />
        <LocationComponent city="AMS" country="Netherlands" side="right" />
      </View>
      <TitleFlight title={'Select Date '} marginTop={20} />
      <View style={{marginTop: 15}}>
        <Calendar
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          markedDates={{
            '2020-11-21': {selected: true, marked: true, selectedColor: 'blue'},
            '2020-11-22': {marked: true},
            '2020-11-23': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2020-11-24': {disabled: true, disableTouchEvent: true},
          }}
        />
      </View>
      <BtnNext marginTop={200} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 30,
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
});
export default DateScreen;
