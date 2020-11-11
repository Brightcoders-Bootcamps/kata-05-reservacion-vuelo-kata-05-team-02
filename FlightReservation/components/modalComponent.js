import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

function IconCheck(props) {
  if (props.isIconCheck) {
    return (
      <AnimatedCircularProgress
        size={80}
        width={8}
        fill={100}
        tintColor="#5362D8"
        backgroundColor="#3d5875"
        duration={2500}
      />
    );
  } else {
    return (
      <Image style={styles.iconCheck} source={require('../img/check.png')} />
    );
  }
}

function ModalCustom(props) {
  const {modalVisible, text, isIconCheck} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        presentationStyle="overFullScreen">
        <View
          style={[
            styles.centeredView,
            {backgroundColor: 'rgba(0, 0, 0, 0.4)'},
          ]}>
          <View style={[styles.modalView, {backgroundColor: 'black'}]}>
            <IconCheck isIconCheck={isIconCheck}/>
            <Text style={styles.modalText}>{text}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    paddingBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 15,
    marginBottom: 15,
    color: '#5B6EF8',
    textAlign: 'center',
  },
  iconCheck: {
    tintColor: '#5362D8',
    height: 80,
    width: 80,
  },
});

export default ModalCustom;
