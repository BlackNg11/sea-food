import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBx9Qj7nEWbnoEqaFU75WjiK-5tDd4V2M8",
    authDomain: "sea-food-2ba9c.firebaseapp.com",
    databaseURL: "https://sea-food-2ba9c.firebaseio.com",
  });

const base = Rebase.createClass(firebaseApp.database());


export default base;
