import React, {useState} from 'react';
import {LogBox, View, Text} from 'react-native';
import OriginScreen from '../screens/originScreen';
import DestinationScreen from '../screens/destinationScreen';
import DateScreen from '../screens/dateScreen';
import PassengerScreen from '../screens/passengersScreen';
import ConfirmationScreen from '../screens/confirmationScreen';

const BookingScreen = () => {
  const tripData={
    origin:"",
    destination:"",
    date:"",
    passengers:"",
  };
  const [screenName, setScreenName] = useState('originScreen');
  const [originLocation, setOriginLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [passengers, setPassengers] = useState('');

  React.useEffect(() => {
  console.log(passengers);
  });

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
      {screenName == 'datescreen' && (
        <DateScreen
          originLocation={originLocation}
          destinationLocation={destinationLocation}
          setTripDate={setTripDate}
          setScreenName={setScreenName}
        />
      )}
      {screenName == 'passengerscreen' && (
        <PassengerScreen
          originLocation={originLocation}
          destinationLocation={destinationLocation}
          passengers={passengers}
          setPassengers={setPassengers}
          setScreenName={setScreenName}
        />
      )}
      {screenName == 'confirmationscreen' && (
        <ConfirmationScreen
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
