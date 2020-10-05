import firebase from 'firebase';


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_MESGID,
    appId: process.env.REACT_APP_APPID
};


firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();