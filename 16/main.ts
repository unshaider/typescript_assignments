// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guests : string[] = ["Khurram", "Jarry", "Umer"]
for (let i = 0; i < guests.length; i++) {
    console.log(`"Dear ${guests[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of stimulating conversation and delicious food.\n`);
}

let newGuests :string[] =["Khurram", "Umer", "Umair"]
for (let i = 0; i < guests.length; i++) {
    console.log(`"Dear ${newGuests[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of stimulating conversation and delicious food.\n`);
}

let absent_guest : string = "Jarry"
console.log(`Mr ${absent_guest} will not make it to dinner.`);
