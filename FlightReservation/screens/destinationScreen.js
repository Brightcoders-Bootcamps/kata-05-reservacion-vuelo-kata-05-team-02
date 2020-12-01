import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../src/colors';
import BtnNext from '../components/flightsComponents/btnNext';
import TitleFlight from '../components/flightsComponents/titleFlight';
import InputFlight from '../components/flightsComponents/inputFlight';
import LocationComponent from '../components/flightsComponents/locationComponent';
import AirplaneIcon from '../components/flightsComponents/airplaneIcon';
import strings from '../src/strings';

const OriginScreen = (props) => {
  const {
    originLocation,
    destinationLocation,
    setDestinationLocation,
    setScreenName,
    fillInfo,
  } = props;

  onChangeLocation = (location) => {
    fillInfo("destination",location);
    setDestinationLocation(location);
  };

  const originLocationArray = originLocation.split(',');
  const city = originLocationArray[0];
  const country = originLocationArray[1];

  return (
    <View style={style.container}>
      <View style={[style.rowDirection, style.travelBottom]}>
        <LocationComponent city={city} country={country} side="left" />
        <AirplaneIcon />
      </View>
      <TitleFlight title={strings.destinationQuestion} marginTop={20} />
      <InputFlight
        location={destinationLocation}
        onChangeLocation={onChangeLocation}
      />
      <BtnNext
        enable={destinationLocation}
        setScreenName={setScreenName}
        nextScreen={'datescreen'}
        marginTop={250}
      />
    </View>
  );
};
const style = StyleSheet.create({
  travelBottom: {
    paddingBottom: 10,
    borderColor: colors.myflightsDivision,
    borderBottomWidth: 1,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  container: {
    padding: 30,
  },
});

export default OriginScreen;
