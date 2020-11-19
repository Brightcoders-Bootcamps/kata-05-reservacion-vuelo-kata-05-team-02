import React, {useState} from 'react';
import {
  LogBox,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../src/colors';
import airplane from '../img/flight.png';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const DateScreen = () => {
  return (
    <View
      style={{
        padding: 30,
      }}>
      <View style={[style.rowDirection, style.travelBottom]}>
        <View>
          <Text style={style.origin}>BEG</Text>
          <Text style={[style.originComplete, style.font16]}>Serbia</Text>
        </View>
        <View>
          <Image style={[style.iconCheck, {marginTop: 20}]} source={airplane} />
        </View>
        <View>
          <Text style={[{textAlign: 'right'}, style.origin]}>AMS</Text>
          <Text style={[style.originComplete, style.font16]}>Netherlands</Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 50,
        }}>
        <Text style={style.titleFont}>Select Date </Text>
      </View>
      <View>
        <Calendar
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          markedDates={{
            '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2012-05-17': {marked: true},
            '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2012-05-19': {disabled: true, disableTouchEvent: true},
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={style.nextBtnStyle}>
          <Text style={style.nextBtnContent}>Next</Text>
        </TouchableOpacity>
      </View>
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
export default DateScreen;
