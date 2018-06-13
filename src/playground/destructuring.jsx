//
// OBJECT DESTRUCTURING
//

// const person = {
//  name: 'Mason',
//  age: 23,
//  location: {
//   city: 'Redmond',
//   temp: 69
//  }
// }

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//  console.log( `It's ${temperature} in ${city}` );
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher
// if (publisherName) {
//   console.log(publisherName);
// }

//
// OBJECT DESTRUCTURING
//


// const address = ['9536 Redmond Woodinville Road NE', 'Redmond', 'WA', '98052'];
// const [, city, state = 'New York'] = address;
// console.log(` You are in ${ city }, ${ state }. `);

const item = ['Coffee (hot)','$2.00', '$2.50', '$2.75'];
const [coffee,, medium] = item;
console.log(`A medium ${ coffee } costs ${ medium }`)