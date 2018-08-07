import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD9QfquUqoqh9K-_QOn2CVUmkE3kzFh28M",
    authDomain: "expensify-dd69a.firebaseapp.com",
    databaseURL: "https://expensify-dd69a.firebaseio.com",
    projectId: "expensify-dd69a",
    storageBucket: "expensify-dd69a.appspot.com",
    messagingSenderId: "561623565713"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Mason Smith'
})