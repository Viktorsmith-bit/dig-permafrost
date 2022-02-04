// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const quaterneryAppConfig = {
    apiKey: "AIzaSyBDoaOcQDLlq1P7qvF3rF1mWassohWLR9k",
    authDomain: "glaciaresylagunas-datavector.firebaseapp.com",
    databaseURL: "https://glaciaresylagunas-datavector-default-rtdb.firebaseio.com",
    projectId: "glaciaresylagunas-datavector",
    storageBucket: "glaciaresylagunas-datavector.appspot.com",
    messagingSenderId: "62133482811",
    appId: "1:62133482811:web:7c5dc1aecd39dfd80ef31e"
};

const quaterneryApp = initializeApp(quaterneryAppConfig, "quaternery");

export const app =  getDatabase(quaterneryApp);