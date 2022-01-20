// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAE63lyUSgs-UYYfJTbIASz6MWi9wi3rIw",
    authDomain: "permafrost-datavector2.firebaseapp.com",
    databaseURL: "https://permafrost-datavector2-default-rtdb.firebaseio.com",
    projectId: "permafrost-datavector2",
    storageBucket: "permafrost-datavector2.appspot.com",
    messagingSenderId: "801372098784",
    appId: "1:801372098784:web:a36f3b3c3930f45fe08085"
};

initializeApp(firebaseConfig);
export const app =  getDatabase();