// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guests = ["Khurram", "Jarry", "Umer"];
for (var i = 0; i < guests.length; i++) {
    console.log("\"Dear ".concat(guests[i], ",\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of stimulating conversation and delicious food.\n"));
}
var newGuests = ["Khurram", "Umer", "Umair"];
for (var i = 0; i < guests.length; i++) {
    console.log("\"Dear ".concat(newGuests[i], ",\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of stimulating conversation and delicious food.\n"));
}
var absent_guest = "Jarry";
console.log("Mr ".concat(absent_guest, " will not make it to dinner."));
