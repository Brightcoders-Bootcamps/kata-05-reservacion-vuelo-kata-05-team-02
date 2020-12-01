import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../src/colors';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import BtnNext from '../components/flightsComponents/btnNext';
import TitleFlight from '../components/flightsComponents/titleFlight';
import AirplaneIcon from '../components/flightsComponents/airplaneIcon';
import LocationComponent from '../components/flightsComponents/locationComponent';
const DateScreen = (props) => {
  const {
    originLocation,
    destinationLocation,
    tripDate,
    setTripDate,
    setScreenName,
    fillInfo,
  } = props;

  const originLocationArray = originLocation.split(',');
  const originCity = originLocationArray[0];
  const originCountry = originLocationArray[1];

  const destinationLocationArray = destinationLocation.split(',');
  const destinationCity = destinationLocationArray[0];
  const destinationCountry = destinationLocationArray[1];

  return (
    <View style={style.container}>
      <View style={[style.rowDirection, style.travelBottom]}>
        <LocationComponent
          city={originCity}
          country={originCountry}
          side="left"
        />
        <AirplaneIcon />
        <LocationComponent
          city={destinationCity}
          country={destinationCountry}
          side="right"
        />
      </View>
      <TitleFlight title={'Select Date '} marginTop={20} />
      <View style={{marginTop: 15}}>
        <Calendar
          onDayPress={(day) => {
            fillInfo('date', day.dateString);
            setTripDate(day.dateString);
          }}
          markedDates={{
            '2020-11-21': {selected: true, marked: true, selectedColor: 'blue'},
          }}
        />
      </View>
      <BtnNext
        enable={tripDate}
        setScreenName={setScreenName}
        nextScreen={'passengerscreen'}
        marginTop={200}
      />
    </View>
  );
};

const style = StyleSheet.create({
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
