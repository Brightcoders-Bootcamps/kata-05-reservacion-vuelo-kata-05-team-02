import React, {useState} from 'react';
import {View} from 'react-native';
import BtnNext from '../components/flightsComponents/btnNext';
import TitleFlight from '../components/flightsComponents/titleFlight';
import InputFlight from '../components/flightsComponents/inputFlight';

const OriginScreen = (props) => {
  const {originLocation, setOriginLocation, setScreenName} = props;

  onChangeLocation = (location) => {
    setOriginLocation(location);
  };

  return (
    <View style={style.container}>
      <TitleFlight title={'Where are you now?'} marginTop={150} />
      <InputFlight
        location={originLocation}
        onChangeLocation={onChangeLocation}
      />
      <BtnNext
        location={originLocation}
        setScreenName={setScreenName}
        nextScreen={'destinationScreen'}
        marginTop={250}
      />
    </View>
  );
};
const style = {
  container: {
    padding: 30,
  },
};

export default OriginScreen;
