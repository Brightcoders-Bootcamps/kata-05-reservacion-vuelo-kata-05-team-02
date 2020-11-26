import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../src/colors';
import airplane from '../img/flight.png';
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
    fillInfo
  } = props;
  
  return (
    <View
      style={{
        padding: 30,
      }}>
      <View style={[style.rowDirection, style.travelBottom]}>
        <LocationComponent city="BEG" country="Serbia" side="left" />
        <AirplaneIcon />
        <LocationComponent city="AMS" country="Netherlands" side="right" />
      </View>      
      <TitleFlight title={'Select Date '} marginTop={20} />
      <View style={{marginTop:15}}>
        <Calendar
          onDayPress={(day) => {
            //console.log('selected day', day.dateString);
            fillInfo("date",day.dateString);
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
