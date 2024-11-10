import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyCR7iutXvcbe9_vF9p83roSqBzo3ioxFJs",
  authDomain: "node-firebase-55a66.firebaseapp.com",
  databaseURL: "https://bezkoder-firebase.firebaseio.com",
  projectId: "node-firebase-55a66",
  storageBucket: "node-firebase-55a66.firebasestorage.app",
  messagingSenderId: "401812243089",
  appId: "1:401812243089:web:0b9a623f73d3d80d52f530",
};

firebase.initializeApp(config);

export default firebase.firestore();
