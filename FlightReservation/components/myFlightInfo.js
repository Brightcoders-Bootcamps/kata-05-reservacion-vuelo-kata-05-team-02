import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import airplane from '../img/flight.png';
import colors from '../src/colors';
import strings from '../src/strings';

function MyFlightInfo (props) {
  return (
      <View style={{paddingLeft: 25, paddingRight: 25}}>
        {/* informacion de  origen/destino*/}
        <View
          style={[
            styles.rowDirection,
            {
              paddingBottom: 10,
            },
          ]}>
          <View>
            <Text style={styles.origin}>BEG</Text>
            <Text style={[styles.originComplete, styles.font16]}>Serbia</Text>
          </View>
          <View>
            <Image
              style={[styles.iconCheck, {marginTop: 20}]}
              source={airplane}
            />
          </View>
          <View>
            <Text style={[{textAlign: 'right'}, styles.origin]}>AMS</Text>
            <Text style={[styles.originComplete, styles.font16]}>
              Netherlands
            </Text>
          </View>
        </View>
        {/* liena divisoria */}
        <View
          style={{
            borderColor: colors.myflightsDivision,
            borderTopWidth: 2,
          }}></View>
        {/* informacion de fecha y pasajeros */}
        <View
          style={[
            styles.rowDirection,
            {
              marginTop: 15,
              borderBottomWidth: 1,
              paddingBottom: 25,
            },
          ]}>
          <Text style={styles.font16}>September 3, 2020</Text>
          <Text style={styles.font16}>2 passengers</Text>
        </View>
      </View>
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
  rowDirection: {flexDirection: 'row', justifyContent: 'space-between'},
  origin: {fontSize: 30, fontWeight: 'bold', marginBottom: 10},
  originComplete: {fontWeight: '200'},
  font16: {fontSize: 16},
  iconCheck: {
    tintColor: colors.bluePrimary,
    height: 20,
    width: 25,
  },
});

export default MyFlightInfo;
