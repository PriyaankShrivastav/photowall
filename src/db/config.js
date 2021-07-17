import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCXXb6RMV-Ol2pMTvKq9RHVEOxqg2vTkig",
    authDomain: "photowall-239b4.firebaseapp.com",
    databaseURL: "https://photowall-239b4-default-rtdb.firebaseio.com",
    projectId: "photowall-239b4",
    storageBucket: "photowall-239b4.appspot.com",
    messagingSenderId: "1020996103765",
    appId: "1:1020996103765:web:351cdc0dc9cd44f661aedc"
  };
  firebase.initializeApp(firebaseConfig)
  var database = firebase.database()
  export {database}