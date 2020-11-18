import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MyFlightInfo from '../components/myFlightInfo';
import colors from '../src/colors';
import strings from '../src/strings';

const MyFlights = () => {
  return (
    //Contenedor
    <>
      <Text style={styles.header}>{strings.titleMyFlights}</Text>
      <ScrollView>
        <MyFlightInfo />
        
      </ScrollView>
      <TouchableOpacity style={styles.plusbutton}>
        <Text style={styles.plusbuttonContent}>+</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: colors.bluePrimary,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 35,
  },
  plusbutton: {
    backgroundColor: colors.bluePrimary,
    borderRadius: 50,
    width: 70,
    height: 70,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 1.15,
  },
  plusbuttonContent: {
    fontSize: 60,
    textAlign: 'center',
    marginTop: -5,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MyFlights;
