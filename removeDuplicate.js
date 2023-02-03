/**To remove the duplicate elements from the array */

let arr = [1, 6, 5, 89, 7, 5, 1, 9, 47, 2, 1, 47, 8, 4, 8, 7, 8, 5, 6, 3, 5, 3];

let newUniqueArray = [...new Set(arr)];

console.log(newUniqueArray);
