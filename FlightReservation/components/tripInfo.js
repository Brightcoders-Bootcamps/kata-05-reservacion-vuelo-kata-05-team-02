import React, {useState} from 'react';
import {View} from 'react-native';
import colors from '../src/colors';
import AirplaneIcon from '../components/flightsComponents/airplaneIcon';
import LocationComponent from '../components/flightsComponents/locationComponent';
import DateFlight from '../components/flightsComponents/dateFlight';
import NumPassengers from '../components/flightsComponents/numPassengers';

const TripInfo = (props) => {
  const {borderBtm, marginTop} = props;
  return (
    <View>
      <View
        style={[
          style.rowDirection,
          style.travelBottom,
          {marginTop: marginTop},
        ]}>
        <LocationComponent city="BEG" country="Serbia" side="left" />
        <AirplaneIcon />
        <LocationComponent city="AMS" country="Netherlands" side="right" />
      </View>
      <View
        style={[
          style.rowDirection,
          style.dateBottom,
          {borderBottomWidth: borderBtm},
        ]}>
        <DateFlight date={'September 3, 2020'} />
        <NumPassengers num={3} />
      </View>
    </View>
  );
};
const style = {
  travelBottom: {
    paddingBottom: 10,
    borderColor: colors.myflightsDivision,
    borderBottomWidth: 2,
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
export default TripInfo;
