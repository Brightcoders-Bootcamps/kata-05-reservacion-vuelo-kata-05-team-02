import React, {useState} from 'react';
import {LogBox, View, Text} from 'react-native';
import OriginScreen from '../screens/originScreen'
import DestinationScreen from '../screens/destinationScreen'
import DateScreen from '../screens/dateScreen'
import PassengerScreen from '../screens/passengersScreen'
import ConfirmationScreen from '../screens/confirmationScreen'



const  BookingScreen = () => {

    return(
        <View>
            <OriginScreen/>
            {/* <DestinationScreen/>
            <DateScreen/>
            <PassengerScreen/>
            <ConfirmationScreen/> */}
        </View>
    );
}

export default BookingScreen;