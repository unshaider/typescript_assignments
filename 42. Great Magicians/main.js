"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn & Teller'];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
;
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i] = "The great " + magicians[i]);
    }
}
make_great(magicians);
show_magicians(magicians);
