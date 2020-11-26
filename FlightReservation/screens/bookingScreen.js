import React, {useState} from 'react';
import {LogBox, View, Text} from 'react-native';
import OriginScreen from '../screens/originScreen';
import DestinationScreen from '../screens/destinationScreen';
import DateScreen from '../screens/dateScreen';
import PassengerScreen from '../screens/passengersScreen';
import ConfirmationScreen from '../screens/confirmationScreen';

const BookingScreen = () => {
  const [tripData, settripData] = useState({
    origin: '',
    destination: '',
    date: '',
    passengers: '',
  });
  const [screenName, setScreenName] = useState('originScreen');
  const [originLocation, setOriginLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [passengers, setPassengers] = useState('');

  const fillInfo = (propierty, value) => {
    settripData({
      ...tripData,
      [propierty]: value,
    });
  };

  return (
    <View>
      {screenName == 'originScreen' && (
        <OriginScreen
          originLocation={originLocation}
          setOriginLocation={setOriginLocation}
          setScreenName={setScreenName}
          tripData={tripData}
          fillInfo={fillInfo}
        />
      )}
      {screenName == 'destinationScreen' && (
        <DestinationScreen
          originLocation={originLocation}
          destinationLocation={destinationLocation}
          setDestinationLocation={setDestinationLocation}
          setScreenName={setScreenName}
          tripData={tripData}
          fillInfo={fillInfo}
        />
      )}
      {screenName == 'datescreen' && (
        <DateScreen
          originLocation={originLocation}
          destinationLocation={destinationLocation}
          setTripDate={setTripDate}
          tripDate={tripDate}
          setScreenName={setScreenName}
          tripData={tripData}
          fillInfo={fillInfo}
        />
      )}
      {screenName == 'passengerscreen' && (
        <PassengerScreen
          originLocation={originLocation}
          destinationLocation={destinationLocation}
          passengers={passengers}
          setPassengers={setPassengers}
          setScreenName={setScreenName}
          tripDate={tripDate}
          fillInfo={fillInfo}
        />
      )}
      {screenName == 'confirmationscreen' && (
        <ConfirmationScreen
          originLocation={originLocation}
          destinationLocation={destinationLocation}
          passengers={passengers}
          tripDate={tripDate}
          setScreenName={setScreenName}          
        />
      )}
    </View>
  );
};

export default BookingScreen;
