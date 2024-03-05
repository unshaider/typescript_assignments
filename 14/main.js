// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Khurram", "Jarry", "Umer"];
for (var i = 0; i < guests.length; i++) {
    console.log("\"Dear ".concat(guests[i], ",\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of stimulating conversation and delicious food.\n"));
}
