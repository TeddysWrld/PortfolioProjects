import { initializeApp,  } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
import {getAuth} from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyAsJzLXIidlKTFK32RiTgv0I-KLm7yrDO0",
    authDomain: "hey-there-9463d.firebaseapp.com",
    projectId: "hey-there-9463d",
    storageBucket: "hey-there-9463d.appspot.com",
    messagingSenderId: "590118113623",
    appId: "1:590118113623:web:962d956bec91d1790a2e12"
  };

 export const firebaseApp = initializeApp(firebaseConfig)
 export const db = getFirestore(firebaseApp);
 export const auth = getAuth(firebaseApp)