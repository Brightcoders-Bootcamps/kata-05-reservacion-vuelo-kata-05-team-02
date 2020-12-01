import React, {useState} from 'react';
import {LogBox} from 'react-native';
import SignupForm from '../components/signupView';
import LoginView from '../components/loginView';
import {GoogleSignin} from '@react-native-community/google-signin';
import {WEB_CLIENT} from '@env';

GoogleSignin.configure({
  webClientId: WEB_CLIENT,
});
import {firebase} from '../bdd/configFirebase';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);
LogBox.ignoreLogs(['Setting a timer']);

const MainScreen = (props) => {
  const {navigation} = props;
  const formObject = {
    name: '',
    email: '',
    password: '',
    agreed: false,
    subscribed: false,
  };
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [isLoginFormActive, setIsLoginFormActive] = useState(false);
  const [formObjectState, setFormObjectState] = useState(formObject);
  const [modalVisible, setModalVisible] = useState(false);
  const [singedText, setSignetText] = useState('');
  const [isIconCheck, setIsIconCheck] = useState(true);
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState({});

  const addFill = (propierty, value) => {
    setFormObjectState({
      ...formObjectState,
      [propierty]: value,
    });
  };
  React.useEffect(() => {
    if (isLoginFormActive) {
      const dataLoginDefault = {
        name: '-',
        email: '',
        password: '',
        agreed: true,
        subscribed: true,
      };
      setFormObjectState(dataLoginDefault);
    } else {
      const dataLoginDefault = {
        name: '',
        email: '',
        password: '',
        agreed: false,
        subscribed: false,
      };
      setFormObjectState(dataLoginDefault);
    }
    setValidEmail(true);
    setValidPassword(true);
  }, [isLoginFormActive]);

  const showModal = () => {
    setModalVisible(true);
    let textModal = isLoginFormActive ? 'Logging In...' : 'Signing Up...';
    setSignetText(textModal);
    setTimeout(function () {
      SignUpOrLoginAction();
    }, 3000);
  };

  const SignUpOrLoginAction = () => {
    setValidEmail(true);
    setValidPassword(true);
    if (isLoginFormActive) {
      const userData = {
        email: formObjectState.email,
        password: formObjectState.password,
      };
      firebaseAuthLogIn(userData);
    } else {
      const data = {
        firstName: formObjectState.name,
        email: formObjectState.email,
        password: formObjectState.password,
        agreed: formObjectState.agreed,
        subscribed: formObjectState.subscribed,
      };
      firebaseAuthSignUp(data);
    }
  };

  async function SignUpGoogle() {
    setModalVisible(true);
    let textModal = isLoginFormActive ? 'Logging In...' : 'Signing Up...';
    setSignetText(textModal);
    if (isLoginFormActive) {
      const dataGoogle = await GoogleSignin.signIn();
      const userData = {
        email: dataGoogle.user.email,
        password: dataGoogle.user.id,
      };
      firebaseAuthLogIn(userData);
    } else {
      const data = {
        firstName: '',
        email: '',
        password: '',
        agreed: formObjectState.agreed,
        subscribed: formObjectState.subscribed,
      };
      // Get the Google user info
      const userData = await GoogleSignin.signIn();
      data.firstName = userData.user.name;
      data.email = userData.user.email;
      data.password = userData.user.id;
      firebaseAuthSignUp(data);
    }
  }

  function firebaseAuthSignUp(data) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        db.collection('usuario')
          .add(data)
          .then(() => {})
          .catch(() => {});

          const user = firebase.auth().currentUser;
        setIsIconCheck(false);
        let textModal = isLoginFormActive ? 'Logged In' : 'Signed Up';
        setSignetText(textModal);
        setValidEmail(true);
        setValidPassword(true);
        setTimeout(function () {
          setModalVisible(false);
          setIsIconCheck(true);
        }, 1000);

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            navigation.navigate('Flights');
          }
        });
        setFormObjectState(formObject);
      })
      .catch((e) => {
        let textModal = isLoginFormActive
          ? 'Error Loggin In...'
          : 'Error Signing Up...';
        setSignetText(textModal);
        setTimeout(function () {
          setModalVisible(false);
          setIsIconCheck(true);
        }, 1000);
        switch (e.code) {
          case 'auth/invalid-email':
            setValidEmail(false);
            break;
          case 'auth/email-already-in-use':
            setValidEmail(false);
            break;
          case 'auth/weak-password':
            setValidPassword(false);
            break;
        }
      });
  }

  function firebaseAuthLogIn(UserData) {
    firebase
      .auth()
      .signInWithEmailAndPassword(UserData.email, UserData.password)
      .then((response) => {
        setIsIconCheck(false);
        let textModal = isLoginFormActive ? 'Logged In' : 'Signed Up';
        setSignetText(textModal);
        setValidEmail(true);
        setValidPassword(true);
        setTimeout(function () {
          setModalVisible(false);
          setIsIconCheck(true);
        }, 1000);

        navigation.navigate('Flights');
      })
      .catch(() => {
        setValidPassword(false);
        setTimeout(function () {
          setModalVisible(false);
          setIsIconCheck(true);
        }, 1000);
      });
  }

  return (
    <>
      {isLoginFormActive ? (
        <LoginView
          validEmail={validEmail}
          setValidEmail={setValidEmail}
          validPassword={validPassword}
          setValidPassword={setValidPassword}
          isLoginFormActive={isLoginFormActive}
          setIsLoginFormActive={setIsLoginFormActive}
          showModal={showModal}
          addFill={addFill}
          formObjectState={formObjectState}
          modalVisible={modalVisible}
          singedText={singedText}
          isIconCheck={isIconCheck}
          signUpGoogle={SignUpGoogle}
        />
      ) : (
        <SignupForm
          addFill={addFill}
          validEmail={validEmail}
          setValidEmail={setValidEmail}
          validPassword={validPassword}
          setValidPassword={setValidPassword}
          setIsLoginFormActive={setIsLoginFormActive}
          isLoginFormActive={isLoginFormActive}
          setIsLoginFormActive={setIsLoginFormActive}
          showModal={showModal}
          formObjectState={formObjectState}
          modalVisible={modalVisible}
          singedText={singedText}
          isIconCheck={isIconCheck}
          signUpGoogle={SignUpGoogle}
        />
      )}
    </>
  );
};

export default MainScreen;
