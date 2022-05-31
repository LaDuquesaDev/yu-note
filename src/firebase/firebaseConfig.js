import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// export const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_FIREBASE_APPID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
// };

const firebaseConfig = {
    apiKey: "AIzaSyC0oYLA6Shx355wcAEK-Enn07d8GNrBsTY",
    authDomain: "yunote-88484.firebaseapp.com",
    projectId: "yunote-88484",
    storageBucket: "yunote-88484.appspot.com",
    messagingSenderId: "664418053542",
    appId: "1:664418053542:web:5a9528958bc6ae5e2db367",
    measurementId: "G-13N6MGTNGE"
  };

export const app = initializeApp(firebaseConfig);
//react router DOM (ruteo)