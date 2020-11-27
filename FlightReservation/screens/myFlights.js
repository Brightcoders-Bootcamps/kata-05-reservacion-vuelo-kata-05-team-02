import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import MyFlightInfo from '../components/myFlightInfo';
import colors from '../src/colors';
import strings from '../src/strings';
import plus from '../img/plus.png';
import {firebase} from '../bdd/configFirebase';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

const MyFlights = () => {
  const [listFlights, setListFlights] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    setListFlights([]);
    const user = firebase.auth().currentUser;
    if (user) {
      db.collection('trips-' + user.uid)
        .orderBy('date', 'asc')
        .get()
        .then((response) => {
          const itemsArray = [];
          response.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id;
            itemsArray.push(data);
          });
          setListFlights(itemsArray);
        });
    }
    setReloadData(false);
  }, [reloadData]);

  return (
    <>
      <Text style={styles.header}>{strings.titleMyFlights}</Text>
      <ScrollView>
        {listFlights.length != 0 ?
          (listFlights.map((item, index) => {
            return <MyFlightInfo key={index} item={item} />;
          }))
          : <Text>sddd</Text>
        }
      </ScrollView>
      <TouchableOpacity
        style={styles.plusbutton}
        onPress={() => {
          setReloadData(true);
          console.log(listFlights);
        }}>
        <Image style={styles.plusbuttonContent} source={plus} />
      </TouchableOpacity>
    </>
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
  plusbutton: {
    backgroundColor: colors.bluePrimary,
    borderRadius: 50,
    width: 70,
    height: 70,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: Dimensions.get('window').height / 1.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusbuttonContent: {
    tintColor: colors.white,
    height: 35,
    width: 35,
    marginTop: -5,
  },
});

export default MyFlights;
