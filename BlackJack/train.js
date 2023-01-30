let person = {
    name: "alireza",
    age: 23,
    country: "iran",
}

function logData() {
    console.log(
        `${person.name} is ${person.age} years old and lives in the ${person.country}`
    )
}

// let largeCountries = ["t", "india", "usa", "iran", "a"]

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHand())
