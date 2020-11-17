import React from 'react';
import {View, Text, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/mainScreen';

const  Stack = createStackNavigator();
function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    );
}

export default Navigation;