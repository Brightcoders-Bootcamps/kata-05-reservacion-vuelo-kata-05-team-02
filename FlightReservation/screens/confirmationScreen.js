import React, {useState} from 'react';
import {View} from 'react-native';
import colors from '../src/colors';
import TitleFlight from '../components/flightsComponents/titleFlight';
import BtnNext from '../components/flightsComponents/btnNext';
import TripInfo from '../components/tripInfo';

const ConfirmationScreen = () => {
  return (
    <View
      style={{
        padding: 30,
      }}>
      <TripInfo borderBtm={0} marginTop={200} />
      <TitleFlight title={'Your requested was received.'} marginTop={20} />
      <BtnNext marginTop={180} />
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
