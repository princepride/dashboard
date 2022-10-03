import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAZPkFqsdq3RGhKVdxjv0dfefMQw0BCfzE",
    authDomain: "unichat-96da9.firebaseapp.com",
    projectId: "unichat-96da9",
    storageBucket: "unichat-96da9.appspot.com",
    messagingSenderId: "991843674686",
    appId: "1:991843674686:web:fbaa2fb41474fbe273ff6f"
  }).auth();