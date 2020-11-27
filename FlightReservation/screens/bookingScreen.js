import React, {useState} from 'react';
import {LogBox, View, Text} from 'react-native';
import OriginScreen from '../screens/originScreen';
import DestinationScreen from '../screens/destinationScreen';
import DateScreen from '../screens/dateScreen';
import PassengerScreen from '../screens/passengersScreen';
import ConfirmationScreen from '../screens/confirmationScreen';
import {firebase} from '../bdd/configFirebase';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

const BookingScreen = () => {
  const [tripData, settripData] = useState({
    userID: '',
    origin: '',
    destination: '',
    date: '',
    passengers: '',
  });
  const [userID, setUSerID] = useState('');
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

  function registerTrip(screen) {
    setScreenName(screen);
    const user = firebase.auth().currentUser;
    if (user) {
      // setUSerID(user.uid);
      db.collection('trips-' + user.uid)
        .add(tripData)
        .then(() => {})
        .catch(() => {});
    }
  }
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
          //setScreenName={setScreenName}
          tripDate={tripDate}
          fillInfo={fillInfo}
          registerTrip={registerTrip}
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
