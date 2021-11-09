const dogs = {
    breeds : [ "akita", "alaskan malamute", "americal bulldog", "bit bull terrier", 
        "australian shepherd", "basenji", "basset hound", "welsh corgi", "beagle", 
        "bichon frise", "border collie", "boston terrier", "boxer", "bullmastiff", 
        "chihuahua", "collie", "dachshund", "doberman", "irish setter", "french bulldog", 
        "fox terrier", "german shepherd", "gordon setter", "greyhound", "jack russell terrier", 
        "labrador", "mutt", "norwich terrier", "corgi", "pug", "very good boy", "poodle", "samoyed", 
        "saluki", "husky", "english bulldog", "whippet", "very good girl", "yorkie" ],
    moods : {
        positive : [ "crazy", "playful", "silly", "excited", "joyful", "friendly", "calm", "happy" ],
        negative : [ "grumpy", "pissed off", "crazy", "annoyed", "angry", "arrogant" ]
    },
    verbs : {
        positive : [ "comments", "whispers",  "barks", "chitters", 
            "woofs", "baroofs", "mumbles", "arfs" ],
        negative : ["snarls", "snaps", "spats", "squeaks", "snorts", "remarks", "whines",
            "howls" ]
    },
    messages : ["You're going to be okay.", "Please stop talking to dogs, this is worrying"],
}

module.exports = dogs;

console.log(dogs.moods.positive[3]);