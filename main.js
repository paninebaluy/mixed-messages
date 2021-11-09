// import dogs from './dogs'; // ES6
const dogs = require('./dogs'); // ES5

const mood = dogs.moods.positive[3];
const breed = dogs.breeds[9];
const verb = dogs.verbs.positive[5];
const message = dogs.messages[1];

const getMessage  = () => {
    return `A ${mood} ${breed} bounds to you and ${verb}: "${message}"`;
}

console.log(getMessage());