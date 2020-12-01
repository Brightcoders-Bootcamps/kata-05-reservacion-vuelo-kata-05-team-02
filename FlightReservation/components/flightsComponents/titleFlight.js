import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function TitleFlight(props) {
  const {title, marginTop} = props;
  return (
    <View
      style={{
        marginHorizontal: 5,
        marginTop: marginTop,
      }}>
      <Text style={style.titleFont}>{title} </Text>
    </View>
  );
}
const style = StyleSheet.create({
  titleFont: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default TitleFlight;
