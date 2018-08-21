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

const database = firebase.database();

database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })

    console.log(expenses)
  })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109600,
//   createdAt: 91813413513
// })