import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyASsod0WXIzxoflvdi31Dm8MTti2jUX5TM",
  authDomain: "oasiswebtv-f3251.firebaseapp.com",
  projectId: "oasiswebtv-f3251",
  storageBucket: "oasiswebtv-f3251.appspot.com",
  messagingSenderId: "653317103392",
  appId: "1:653317103392:web:3d6d341e9ab9bdb001c145"
};


export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);