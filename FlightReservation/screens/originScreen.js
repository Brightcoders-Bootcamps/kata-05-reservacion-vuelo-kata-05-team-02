import React, {useState} from 'react';
import {View} from 'react-native';
import BtnNext from '../components/flightsComponents/btnNext';
import TitleFlight from '../components/flightsComponents/titleFlight';
import InputFlight from '../components/flightsComponents/inputFlight';
import strings from '../src/strings';

const OriginScreen = (props) => {
  const {originLocation, setOriginLocation, setScreenName,fillInfo} = props;
  onChangeLocation = (location) => {
    fillInfo("origin",location);
    setOriginLocation(location);
  };

  return (
    <View style={style.container}>
      <TitleFlight title={strings.originQuestion} marginTop={150} />
      <InputFlight
        location={originLocation}
        onChangeLocation={onChangeLocation}
      />
      <BtnNext
        enable={originLocation}
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
