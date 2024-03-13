// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var array = ['Makka', 'Karbala', 'Iran', 'Najaf', 'Madina'];
// • Print your array in its original order.
console.log(array.join(", "));
// • Print your array in alphabetical order without modifying the actual list.
console.log(__spreadArray([], array, true).sort().join(", "));
// • Show that your array is still in its original order by printing it.
console.log(array.join(", "));
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(__spreadArray([], array, true).sort().reverse().join(", "));
// • Show that your array is still in its original order by printing it again.
console.log(array.join(", "));
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(array.reverse().join(", "));
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(array.reverse().join(", "));
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(array.sort().join(", "));
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(array.reverse().join(", "));
