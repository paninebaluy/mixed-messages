// import dogs from './dogs'; // ES6
const dogs = require('./dogs'); // ES5

const getRandomArrElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const mood = getRandomArrElement(dogs.moods.negative);
const breed = getRandomArrElement(dogs.breeds);
const action = getRandomArrElement(dogs.actions);
const verb = getRandomArrElement(dogs.verbs.negative);
const message = getRandomArrElement(dogs.messages);

const getMessage  = () => {
    return `A ${mood} ${breed} ${action} and ${verb}: "${message}"`;
}

console.log(getMessage());