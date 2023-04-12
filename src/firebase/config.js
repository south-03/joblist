import app from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDo5vs2S4S7oYkLIBxQBeYTvnnKF9pwuO4",
  authDomain: "joblist-7ae5f.firebaseapp.com",
  projectId: "joblist-7ae5f",
  storageBucket: "joblist-7ae5f.appspot.com",
  messagingSenderId: "351573332015",
  appId: "1:351573332015:web:95d7114bb7d98ecfbb76da",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firebase, firestore, app };
