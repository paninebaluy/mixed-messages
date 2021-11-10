'use strict';

// constants
const dogs = {
    breeds : {
        smol : [ "little good boy", "mutt", "very smol good girl", "bichon frise", "boston terrier", "chihuahua", 
        "dachshund", "jack russell terrier", "norwich terrier", "pug", "fox terrier", "yorkie", "maltese", 
        "pekingese", "mini bullterier", "white westie", "tiny puppy" ],
        medium: [ "very good boy", "mutt", "very good girl", "american bulldog", "pit bull", 
        "australian shepherd", "basenji", "welsh corgi", "beagle", "border collie", "boxer", "collie", 
        "poodle", "samoyed", "saluki", "husky", "english bulldog", "whippet", "doberman", "french bulldog", 
        "greyhound" ],
        large : [ "akita", "alaskan malamute", "newfounland", "irish setter", 
        "german shepherd", "very good boy", "mutt", "very good girl", "basset hound", "gordon setter", 
        "labrador", "bullmastiff" ]
    },
    moods : {
        positive : [ "crazy", "playful", "silly", "excited", "joyful", "friendly", "calm", "happy" ],
        negative : [ "grumpy", "pissed off", "crazy", "annoyed", "angry", "arrogant" ]
    },
    actions: [ "drops a ball", "shakes off spit", "wags its tail", "sniffs your toes", "sits in front of you", "loops after its tail" ],
    verbs : {
        positive : [ "comments", "whispers",  "barks", "chitters", 
            "woofs", "baroofs", "mumbles", "arfs" ],
        negative : ["snarls", "snaps", "spats", "squeaks", "snorts", "remarks", "whines",
            "howls" ]
    },
    messages : ["You're going to be okay.", "Please stop talking to dogs, this is worrying.", 
    "Your pockets smell nice today! Any cheese?", "I smell a good breakfast on you, do you have any of it left to share?", 
    "Human, listen closely: I need you to throw this ball and not do anything else today.", "You smell like my favorite human." ],
}

// DOM elements
const smolDogBtn = document.getElementById('smol');
const mediumDogBtn = document.getElementById('medium');
const largeDogBtn = document.getElementById('large');
const resetBtn = document.getElementById('return');
const sizeSelector = document.querySelector('.selector');
const dogResponseBox = document.querySelector('.response');
const footer = document.querySelector('.footer');
const responseText = document.querySelector('.response__text');
const header = document.querySelector('.header');
const imgArray = document.querySelectorAll('card__img');

// functions
const switchBoxes = () => {
    header.style.opacity = 0;
    sizeSelector.style.display = 'none';
    sizeSelector.style.opacity = 0;
    dogResponseBox.style.display = 'flex';
    dogResponseBox.style.opacity = 1; 
}

const resetBoxes = () => {
    dogResponseBox.style.display = 'none';
    dogResponseBox.style.opacity = 0; 
    header.style.opacity = 1;
    sizeSelector.style.display = 'flex';
    sizeSelector.style.opacity = 1;
}

const getRandomArrElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getMessage = (size) => {
    const positiveOrNegative = getRandomArrElement([ 'positive', 'negative' ]);
    const mood = getRandomArrElement(dogs.moods[positiveOrNegative]);
    const article = 'aoiue'.includes(mood[0]) ? 'An' : 'A'; // checks if mood starts with a vowel
    const breed = getRandomArrElement(dogs.breeds[size]);
    const action = getRandomArrElement(dogs.actions);
    const verb = getRandomArrElement(positiveOrNegative === 'positive' ? dogs.verbs.positive : dogs.verbs.negative);
    const message = getRandomArrElement(dogs.messages);

    return `${article} ${mood} ${breed} ${action} and ${verb}: "${message}"`;
}

// event handlers



smolDogBtn.addEventListener('click', () => {
    switchBoxes();
    responseText.textContent = getMessage('smol');
});
imgArray.forEach(img, () => {
    img.addEventListener('touchstart', (evt) => evt.closest('.card'.style.transform = "translate(20px, 20px) scale(1.1)"));
});

mediumDogBtn.addEventListener('click', () => {
    switchBoxes();
    responseText.textContent = getMessage('medium');
});
largeDogBtn.addEventListener('click', () => {
    switchBoxes();
    responseText.textContent = getMessage('large');
});
resetBtn.addEventListener('click', resetBoxes);