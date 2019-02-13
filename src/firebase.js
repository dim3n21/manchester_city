import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');

  export {
      firebase,
      firebaseMatches,
      firebasePromotions,
      firebaseTeams,
      firebaseDB
  }