// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const tertiaryAppConfig = {
    apiKey: "AIzaSyCFGs8MMYXsXqkCfFHOT9ce2tgSAr6E46o",
    authDomain: "permafrost90-datavector.firebaseapp.com",
    databaseURL: "https://permafrost90-datavector-default-rtdb.firebaseio.com",
    projectId: "permafrost90-datavector",
    storageBucket: "permafrost90-datavector.appspot.com",
    messagingSenderId: "790587297967",
    appId: "1:790587297967:web:8adefcc12a104a6d63845a"
};

const tertiaryApp = initializeApp(tertiaryAppConfig, "tertiary");

export const app =  getDatabase(tertiaryApp);