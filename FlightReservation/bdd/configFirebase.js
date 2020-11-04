import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbfjGcH8v-T7k0T53DsqNOvlyOwMFCXwo",
    authDomain: "ba-reservacionvuelos.firebaseapp.com",
    databaseURL: "https://ba-reservacionvuelos.firebaseio.com",
    projectId: "ba-reservacionvuelos",
    storageBucket: "ba-reservacionvuelos.appspot.com",
    messagingSenderId: "461524927651",
    appId: "1:461524927651:web:3354b461e28ee6c588ab16",
    measurementId: "G-W5XS718P61"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };