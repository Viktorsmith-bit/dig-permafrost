// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDSTPc0wMpqRxz1OE6vHX8mBHSvO5xqaTU",
    authDomain: "uhnieve-datavector.firebaseapp.com",
    databaseURL: "https://uhnieve-datavector-default-rtdb.firebaseio.com",
    projectId: "uhnieve-datavector",
    storageBucket: "uhnieve-datavector.appspot.com",
    messagingSenderId: "985829272719",
    appId: "1:985829272719:web:2b197d61ef84d4997194fa"
};

initializeApp(firebaseConfig);

export const app =  getDatabase();