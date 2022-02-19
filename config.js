import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCX3lplBvrnSkdLyRcP1LokgBz3BVE6mi4",
  authDomain: "e-ride-2c80d.firebaseapp.com",
  projectId: "e-ride-2c80d",
  storageBucket: "e-ride-2c80d.appspot.com",
  messagingSenderId: "27783164748",
  appId: "1:27783164748:web:4a335510521f36695115e9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

