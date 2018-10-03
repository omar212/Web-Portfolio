var firebase = require("firebase");

const config = {
    apiKey: "AIzaSyCR-ea_yrZd0yRVnC9I_AuEWgSuU-RW6RM",
    authDomain: "my-portfolio-35460.firebaseapp.com",
    databaseURL: "https://my-portfolio-35460.firebaseio.com",
    projectId: "my-portfolio-35460",
    storageBucket: "my-portfolio-35460.appspot.com",
    messagingSenderId: "8157032021"
  };
  firebase.initializeApp(config);
  export default firebase;
