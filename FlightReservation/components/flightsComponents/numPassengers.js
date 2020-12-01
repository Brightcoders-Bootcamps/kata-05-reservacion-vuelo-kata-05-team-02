import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function NumPassengers(props) {
  const {num} = props;
  return (
    <View>
      <Text style={styles.font16}>{num} passengers</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  font16: {
    fontSize: 16,
  },
});

export default NumPassengers;
