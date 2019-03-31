import Rebase from 're-base'; // package for configuring react with firebase
import firebase from 'firebase'; 

// configuration details from Firebase project overview (web app) 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDo0Y9LBQjKXKSDxBibm-o_GEbaEHoAuZY",
    authDomain: "catch-of-the-day-alex-rueb.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-alex-rueb.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;