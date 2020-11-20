import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../../src/colors';

function LocationComponent(props) {
  const {city, country, side} = props;
  return (
    <View>
      <Text style={[styles.origin,{textAlign:side}]}>{city}</Text>
      <Text style={[styles.originComplete, styles.font16]}>{country}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  origin: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  originComplete: {
    fontWeight: '200',
  },
  font16: {
    fontSize: 16,
  },
  iconCheck: {
    tintColor: colors.bluePrimary,
    height: 20,
    width: 25,
  },
});
export default LocationComponent;
