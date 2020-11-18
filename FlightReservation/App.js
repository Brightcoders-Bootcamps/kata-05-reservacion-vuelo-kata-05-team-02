/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MainScreen from './screens/mainScreen';

const App: () => React$Node = () => {
  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
      <SafeAreaView>
        <MainScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
