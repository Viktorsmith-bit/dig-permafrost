// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const secondaryAppConfig = {
    apiKey: "AIzaSyCBhRVXNFkHT7LldoIULw5HKEaC_L3qqQU",
    authDomain: "permafrost-datavector.firebaseapp.com",
    databaseURL: "https://permafrost-datavector-default-rtdb.firebaseio.com",
    projectId: "permafrost-datavector",
    storageBucket: "permafrost-datavector.appspot.com",
    messagingSenderId: "485018991644",
    appId: "1:485018991644:web:e2442b79d8ab47390cb3d9"
};

const secondaryApp = initializeApp(secondaryAppConfig, "secondary");

export const app =  getDatabase(secondaryApp);