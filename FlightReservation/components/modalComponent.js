import React from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import checkImg from '../img/check.png';
import colors from '../src/colors';

function IconCheck(props) {
  if (props.isIconCheck) {
    return (
      <AnimatedCircularProgress
        size={80}
        width={8}
        fill={100}
        tintColor={colors.bluePrimary}
        backgroundColor="black"
        duration={2500}
      />
    );
  } else {
    return (
      <Image style={styles.iconCheck} source={checkImg} />
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
            {backgroundColor: colors.blackLight},
          ]}>
          <View style={[styles.modalView, {backgroundColor: 'black'}]}>
            <IconCheck isIconCheck={isIconCheck} />
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
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 15,
    marginBottom: 15,
    color: colors.bluePrimary,
    textAlign: 'center',
  },
  iconCheck: {
    tintColor: colors.bluePrimary,
    height: 80,
    width: 80,
  },
});

export default ModalCustom;
