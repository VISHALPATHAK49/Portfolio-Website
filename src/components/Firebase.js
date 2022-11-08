import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB1i9pzRM_enLCOK14YSc4cnf8H__pTucI",
  authDomain: "portfolio-website-final.firebaseapp.com",
  projectId: "portfolio-website-final",
  storageBucket: "portfolio-website-final.appspot.com",
  messagingSenderId: "22234162640",
  appId: "1:22234162640:web:63fe302f4d52af05cec5d5",
  measurementId: "G-FDYW8TQ3EL"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth}