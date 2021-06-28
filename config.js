import * as firebase from 'firebase';
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyDiNqxMdsoUSd9sHmylpnBnRGOeRUE__04",
    authDomain: "virtual-pet-9ad14.firebaseapp.com",
    databaseURL: "https://virtual-pet-9ad14-default-rtdb.firebaseio.com",
    projectId: "virtual-pet-9ad14",
    storageBucket: "virtual-pet-9ad14.appspot.com",
    messagingSenderId: "797036243355",
    appId: "1:797036243355:web:93e9a09abc6215dc69193e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();