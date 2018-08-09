import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBYVLkjf8ZkRq1bBwk1nDLz1ybbnW59DMU",
    authDomain: "fir-sandbox-65a96.firebaseapp.com",
    databaseURL: "https://fir-sandbox-65a96.firebaseio.com",
    projectId: "fir-sandbox-65a96",
    storageBucket: "fir-sandbox-65a96.appspot.com",
    messagingSenderId: "183264277584"
  }
  
firebase.initializeApp(config)

export const database = firebase.database() 
