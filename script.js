// import dogs from './dogs'; // ES6
const dogs = require('./dogs'); // ES5

const getRandomArrElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getMessage  = () => {
    const positiveOrNegative = getRandomArrElement([ 'positive', 'negative' ]);
    const mood = getRandomArrElement(dogs.moods[positiveOrNegative]);
    const article = 'aoiue'.includes(mood[0]) ? 'An' : 'A'; // checks if mood starts with a vowel
    const breed = getRandomArrElement(dogs.breeds);
    const action = getRandomArrElement(dogs.actions);
    const verb = getRandomArrElement(positiveOrNegative === 'positive' ? dogs.verbs.positive : dogs.verbs.negative);
    const message = getRandomArrElement(dogs.messages);

    return `${article} ${mood} ${breed} ${action} and ${verb}: "${message}"`;
}

console.log(getMessage());
console.log(getMessage());
console.log(getMessage());
console.log(getMessage());
console.log(getMessage());
console.log(getMessage());
console.log(getMessage());
console.log(getMessage());