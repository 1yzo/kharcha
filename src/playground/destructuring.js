// const person = {
//     name: 'Osman',
//     age: 20,
//     location: {
//         city: 'Irvine',
//         temp: 73
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age} years old.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It is ${temperature} degrees in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19417'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , mediumPrice] = item;

console.log(`A ${product} costs ${mediumPrice}.`);