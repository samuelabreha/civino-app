import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/messaging';

const firebaseConfig = {
  // Votre configuration Firebase ici
  apiKey: "YOUR_API_KEY",
  authDomain: "civino-app.firebaseapp.com",
  projectId: "civino-app",
  storageBucket: "civino-app.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
