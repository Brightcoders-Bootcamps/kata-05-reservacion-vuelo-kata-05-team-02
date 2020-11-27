import React, {useState} from 'react';
import {LogBox, View, Text} from 'react-native';
import OriginScreen from '../screens/originScreen';
import DestinationScreen from '../screens/destinationScreen';
import DateScreen from '../screens/dateScreen';
import PassengerScreen from '../screens/passengersScreen';
import ConfirmationScreen from '../screens/confirmationScreen';
import {WEB_CLIENT} from '@env';
// GoogleSignin.configure({
//   webClientId: WEB_CLIENT,
// });
import {firebase} from '../bdd/configFirebase';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);
LogBox.ignoreLogs(['Setting a timer']);



const BookingScreen = () => {

  const user = firebase.auth().currentUser;
  console.log(user);
// user.providerData.forEach((userInfo) => {
//   console.log('User info for provider: ', userInfo);
// });


  const [tripData, settripData] = useState({
    userID: '',
    origin: '',
    destination: '',
    date: '',
    passengers: '',
  });
  const [userID, setUSerID] = useState('1');
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
    db.collection('trips-' + userID)
      .add(tripData)
      .then(() => {})
      .catch(() => {});
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
