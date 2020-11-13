import React, {useState} from 'react';
import {LogBox} from 'react-native';
import SignupForm from '../components/signupView';
import LoginView from '../components/loginView';
import {GoogleSignin} from '@react-native-community/google-signin';
import { WEB_CLIENT } from '@env';

GoogleSignin.configure({
  webClientId: WEB_CLIENT,
});
import {firebase} from '../bdd/configFirebase';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);
LogBox.ignoreLogs(['Setting a timer']);

const MainScreen = () => {
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
  const [userInfo, setuserInfo] = useState([]);

  const addFill = (propierty, value) => {
    setFormObjectState({
      ...formObjectState,
      [propierty]: value,
    });
  };
  React.useEffect(() => {
    if (isLoginFormActive) {
      formObject.agreed = true;
      formObject.subscribed = true;
      formObject.name = '-';
      setFormObjectState(formObject);
    } else {
      formObject.agreed = false;
      formObject.subscribed = false;
      formObject.name = '-';
      setFormObjectState(formObject);
    }
  }, [isLoginFormActive]);

  const showModal = () => {
    setModalVisible(true);
    let textModal = isLoginFormActive ? 'Logging In...' : 'Signing Up...';
    setSignetText(textModal);
    setTimeout(function () {
      setIsIconCheck(false);
      SignUpOrLoginAction();
      textModal = isLoginFormActive ? 'Logged In' : 'Signed Up';
      setSignetText(textModal);
    }, 3000);
  };

  const SignUpOrLoginAction = () => {
    setValidEmail(true);
    setValidPassword(true);
    if (isLoginFormActive) {
      // login action
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
      // login action
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
        setIsIconCheck(false);
        let textModal = isLoginFormActive ? 'Logged In...' : 'Signed Up...';
        setSignetText(textModal);
        setValidEmail(true);
        setValidPassword(true);

        db.collection('usuario')
          .add(data)
          .then(() => {})
          .catch(() => {});
        setTimeout(function () {
          setModalVisible(false);
          setIsIconCheck(true);
        }, 1000);
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
