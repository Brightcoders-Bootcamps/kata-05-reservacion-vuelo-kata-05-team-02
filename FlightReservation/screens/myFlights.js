import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import MyFlightInfo from '../components/myFlightInfo';
import colors from '../src/colors';
import strings from '../src/strings';
import plus from '../img/plus.png';
import Navigation from '../components/navigation';

const MyFlights = (props) => {
  const {navigation} = props;
  function goBack(){    
    navigation.goBack();
  }
  return (
    <>
      <Text style={styles.header}>{strings.titleMyFlights}</Text>
      <Button title="Go back button" onPress={goBack}>
        <Text>Go Back</Text>
      </Button>
      <ScrollView>
        <MyFlightInfo />
      </ScrollView>
      <TouchableOpacity style={styles.plusbutton}>
        <Image style={styles.plusbuttonContent} source={plus} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusbuttonContent: {
    tintColor: colors.white,
    height: 35,
    width: 35,
    marginTop: -5,
  },
});

export default MyFlights;
