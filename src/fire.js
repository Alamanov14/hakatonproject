import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC8brBFRgI3qcqfcaUzjrXbfNU0TnRGms",
  authDomain: "registerhackathon.firebaseapp.com",
  projectId: "registerhackathon",
  storageBucket: "registerhackathon.appspot.com",
  messagingSenderId: "479166946157",
  appId: "1:479166946157:web:413286a79cd304467e1864",
};

// const fire = firebase.initializeApp(firebaseConfig);
// export default fire;

// const fire = initializeApp(firebaseConfig);
const fire = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(fire);

export default fire;
