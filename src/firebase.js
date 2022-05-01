import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCWfCTJ5HHNmfZBZsujcmwRp_yuyUR6lvI",
  authDomain: "clone-app-56d23.firebaseapp.com",
  projectId: "clone-app-56d23",
  storageBucket: "clone-app-56d23.appspot.com",
  messagingSenderId: "365037922010",
  appId: "1:365037922010:web:83ac5fb01ef153882127e3"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

export {db}