// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Kumail", "Dawood", "Hammad", "Bilal", "Owais"];
var message = ", You should always wake up early in the morning.";
for (var i = 0; i < names.length; i++) {
    console.log("".concat(names[i]).concat(message));
}
