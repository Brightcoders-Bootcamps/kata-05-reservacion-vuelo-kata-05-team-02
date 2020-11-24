import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/mainScreen';
import MyFlights from './Myflights';

const Stack = createStackNavigator();
function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Flights" component={MyFlights} />
    </Stack.Navigator>
  );
}

export default Navigation;
