import * as firebase from 'firebase'
require('@firebase/firestore')

//web apps fire configration
const firebaseConfig = {
  apiKey: "AIzaSyCfw6r5hh83KeorafqGoVCVzL_gJvVwjVY",
  authDomain: "story-hub-5ce7f.firebaseapp.com",
  databaseURL: "https://story-hub-5ce7f.firebaseio.com",
  projectId: "story-hub-5ce7f",
  storageBucket: "story-hub-5ce7f.appspot.com",
  messagingSenderId: "782888772238",
  appId: "1:782888772238:web:d9c581d947e0e9ae011fdf",
  measurementId: "G-0DKJ5ZGRET"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()