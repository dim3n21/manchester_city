import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDfu5NpyxnDpRZA6yepjN1M1oWxd3prUfM",
    authDomain: "manchester-city-e0ae2.firebaseapp.com",
    databaseURL: "https://manchester-city-e0ae2.firebaseio.com",
    projectId: "manchester-city-e0ae2",
    storageBucket: "manchester-city-e0ae2.appspot.com",
    messagingSenderId: "665754314750"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  firebaseDB.ref('matches').once('value').then( (snapshot) => {
    console.log(snapshot.val());
  })