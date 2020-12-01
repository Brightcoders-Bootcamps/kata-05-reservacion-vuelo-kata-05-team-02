import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SmoothPicker from 'react-native-smooth-picker';
import arrow from '../../img/tocar.png';

function dataCity() {
  let arr = [];
  for (let index = 1; index < 15; index++) {
    arr.push(index);
  }
  return arr;
}

const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};
const sizeText = {
  0: 23,
  1: 18,
  2: 13,
};

const Item = React.memo(({opacity, selected, vertical, fontSize, name}) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          borderColor: 'transparent',
          borderTopColor: selected ? '#E5E5E5' : 'transparent',
          borderBottomColor: selected ? '#E5E5E5' : 'transparent',
          width: vertical ? 190 : 'auto',
          justifyContent: selected ? 'space-between' : 'center',
        },
      ]}>
      {selected && (
        <Image
          style={{tintColor: 'blue', width: 16, height: 18, marginRight: 5}}
          source={arrow}
        />
      )}

      <Text style={{fontSize, fontWeight: selected ? 'bold' : 'normal'}}>
        {name}
      </Text>
      {selected && (
        <Image
          style={{
            tintColor: 'blue',
            width: 16,
            height: 18,
            marginRight: 5,
            transform: [{rotate: '180deg'}],
          }}
          source={arrow}
        />
      )}
    </View>
  );
});

const ItemToRender = ({item, index}, indexSelected, vertical) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  let fontSize = sizeText[gap];
  if (gap > 1) {
    fontSize = sizeText[2];
  }

  return (
    <Item
      opacity={opacity}
      selected={selected}
      vertical={vertical}
      fontSize={fontSize}
      name={item}
    />
  );
};

export default function numberPicker(props) {
  const {setPassengers, fillInfo} = props;
  const [selected, setSelected] = useState(1);
  const refPicker = useRef(null);
  const handleChange = (index) => {
    setSelected(index);
    fillInfo("passengers",index+1);
    setPassengers(index+1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          data={dataCity()}
          scrollAnimation
          onSelected={({item, index}) => handleChange(index)}
          renderItem={(option) => ItemToRender(option, selected, true)}
          magnet
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  wrapperVertical: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    color: 'black',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    borderWidth: 1,
    flexDirection: 'row',
  },
});
