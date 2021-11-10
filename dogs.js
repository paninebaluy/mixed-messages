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

module.exports = dogs;