// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation : string[] = ["Civic", "Ferari", "Audi", "Cultus", "Supra"]
let message : string = "I would like to own "
for (let i = 0; i < transportation.length; i++) {
    console.log(`${message}${transportation[i]}.`);
}
// console.log(`I would like to own a ${transportation[0]} car.`);
