

//dstructring means search property name with variable.
const person = {
  name:'xyz',
  age: 40,
  friends: 'habia',
  colligue: 'karima'
}

// const name = person.name;
// const friends = person.friends;

// console.log(friends)

//const age = person;
// const {age, name} = person;
// console.log(age, name)


const myArray = [1,2,'karim']
const [first_number, ...restNumber] = myArray;
console.log(restNumber)