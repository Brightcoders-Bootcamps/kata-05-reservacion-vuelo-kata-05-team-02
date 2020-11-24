import React from 'react';
import {View, Text, Button} from 'react-native';
import {firebase} from '../bdd/configFirebase';

function Myflights(props) {
  const {navigation} = props;
  const signOut = () => {
    firebase.auth().signOut();
    navigation.navigate('Main');
  };
  return (
    <View>
      <Text>My flights</Text>
      <Button onPress={signOut} title="Cerrar Sesión" color="#841584" />
    </View>
  );
}

export default Myflights;
