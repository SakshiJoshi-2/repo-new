const firebase = require('firebase/app')
require('firebase/firestore')
require('firebase/storage')
require('firebase/auth')

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBEnVaSwAlu8Gu-XxX2nZOSCOyh0DVGQVQ',
    authDomain: 'options-267909.firebaseapp.com',
    databaseURL: 'https://options-267909.firebaseio.com',
    projectId: 'options-267909',
    storageBucket: 'options-267909.appspot.com',
    messagingSenderId: '953765261882',
    appId: '1:953765261882:web:1eb863fd154ef4ddaabb03',
  };
  firebase.initializeApp(config)
}
export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()
