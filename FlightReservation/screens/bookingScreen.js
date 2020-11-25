import React, {useState} from 'react';
import {LogBox, View, Text} from 'react-native';
import OriginScreen from '../screens/originScreen';
import DestinationScreen from '../screens/destinationScreen';
import DateScreen from '../screens/dateScreen';
import PassengerScreen from '../screens/passengersScreen';
import ConfirmationScreen from '../screens/confirmationScreen';

const BookingScreen = () => {
  const [screenName, setScreenName] = useState('originScreen');
  const [originLocation, setOriginLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');

  return (
    <View>
      {screenName == 'originScreen' && (
        <OriginScreen
          originLocation={originLocation}
          setOriginLocation={setOriginLocation}
          setScreenName={setScreenName}
        />
      )}
      {screenName == 'destinationScreen' && (
        <DestinationScreen
          originLocation={originLocation}
          destinationLocation={destinationLocation}
          setDestinationLocation={setDestinationLocation}
          setScreenName={setScreenName}
        />
      )}
    </View>
  );
};

export default BookingScreen;
