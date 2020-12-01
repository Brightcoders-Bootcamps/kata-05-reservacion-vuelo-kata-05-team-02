import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function DateFlight(props) {
  const {date} = props;
  return (
    <View>
      <Text style={styles.font16}>{date}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  font16: {
    fontSize: 16,
  },
});

export default DateFlight;
