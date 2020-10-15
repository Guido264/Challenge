import * as firebase from 'firebase/app';
import 'firebase/storage';  // to store images
import 'firebase/firestore'; // database
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvRqihvU6ECS4OkmdRw-Woiyk_9GFV-rs",
    authDomain: "challenge-fire.firebaseapp.com",
    databaseURL: "https://challenge-fire.firebaseio.com",
    projectId: "challenge-fire",
    storageBucket: "challenge-fire.appspot.com",
    messagingSenderId: "95214101356",
    appId: "1:95214101356:web:a3a20483c3a4338c47c949"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };