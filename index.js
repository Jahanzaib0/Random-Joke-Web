let btn= document.getElementById("nextJoke");
 ;
let Myjokes = [
    {
        "category": "Pun",
        "type": "single",
        "joke": "Two fish in a tank. One turns to the other and says, \"Do you know how to drive this thing?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 185,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Two reasons I don't give money to homeless people.\n1) They are going to spend it all on drugs and alcohol\n2) I am going to spend it all on drugs and alcohol.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 72,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "In Soviet Russia, gay sex gets you arrested. In America, getting arrested gets you gay sex.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 289,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The generation of random numbers is too important to be left to chance.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 39,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "My girlfriend's dog died, so I tried to cheer her up by getting her an identical one. It just made her more upset. She screamed at me, \"What am I supposed to do with two dead dogs?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": false,
        "id": 275,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "My grandfather says I'm too reliant on technology.\nI called him a hypocrite and unplugged his life support.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 178,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "My wife and I have reached the difficult decision that we do not want children.\nIf anybody does, please just send me your contact details and we can drop them off tomorrow.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 257,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Me and my Jewish friend were eating lunch and I farted. He got mad so I said \"cmon man a little gas never killed anyone\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": true
        },
        "id": 103,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 51,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I have a fish that can breakdance! Only for 20 seconds though, and only once.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 237,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 9,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The generation of random numbers is too important to be left to chance.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 39,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "My parents raised me as an only child, which really annoyed my younger brother.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 235,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 23,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "My grandfather says I'm too reliant on technology.\nI called him a hypocrite and unplugged his life support.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 178,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Women are like KFC, once you're done with the breasts and thighs, you just have a greasy box to put your bone in.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": true,
            "explicit": true
        },
        "id": 149,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Dark humor is like food, not everyone gets it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": true
        },
        "id": 162,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 204,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 12,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 27,
        "safe": false,
        "lang": "en"
    }
]
btn.addEventListener("click", (e)=>{
    location.reload();
});
let index = Math.floor(Math.random()* Myjokes.length);
console.log(index);
document.getElementById("joke").innerText = Myjokes[index].joke;
