import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from '../../src/colors';
import airplane from '../../img/flight.png';

function AirplaneIcon() {
  return (
    <View>
      <Image style={[styles.iconCheck, {marginTop: 20}]} source={airplane} />
    </View>
  );
}
const styles = StyleSheet.create({
  iconCheck: {
    tintColor: colors.bluePrimary,
    height: 20,
    width: 25,
  },
});

export default AirplaneIcon;
