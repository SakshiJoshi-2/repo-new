const firebase = require('firebase/app')
require('firebase/firestore')
require('firebase/storage')
require('firebase/auth')

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyAGsolW3t33IanYU4rnA196qZVjv_DYFl4",
    authDomain: "school-management-24647.firebaseapp.com",
    databaseURL: "https://school-management-24647.firebaseio.com",
    projectId: "school-management-24647",
    storageBucket: "school-management-24647.appspot.com",
    messagingSenderId: "809304999815",
    appId: "1:809304999815:web:da0471d7026cc3ece9f522"
  };
  firebase.initializeApp(config);
}

export const db = firebase.firestore();
export const db = firebase.storage();
export const db = firebase.auth();


