import React, {useState} from 'react';
import {View} from 'react-native';
import colors from '../src/colors';
import TitleFlight from '../components/flightsComponents/titleFlight';
import BtnNext from '../components/flightsComponents/btnNext';
import AirplaneIcon from '../components/flightsComponents/airplaneIcon';
import LocationComponent from '../components/flightsComponents/locationComponent';
import DateFlight from '../components/flightsComponents/dateFlight';
import NumPassengers from '../components/flightsComponents/numPassengers';

const ConfirmationScreen = () => {
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
      <View style={[style.rowDirection, style.dateBottom]}>
        <DateFlight date={'September 3, 2020'} />
        <NumPassengers num={3} />
      </View>
      <TitleFlight title={'Your requested was received.'} marginTop={20}/>
      <BtnNext marginTop={180}/>
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
