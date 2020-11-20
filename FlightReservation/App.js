/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import MainScreen from './screens/mainScreen';
import MyFlights from './screens/myFlights';
import BookingScreen from './screens/bookingScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView>
        <MyFlights />
        {/* <BookingScreen/> */}
      </SafeAreaView>
    </>
  );
};

export default App;
