/* Return third highest and third lowest elements in an array without using index. */

// This function takes in an array as an argument
function thirdHighestAndLowest(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  // Get the third lowest element by slicing the first three elements of the array and popping the last one
  let thirdLowest = arr.slice(0, 3).pop();
  // Get the third highest element by slicing the last three elements of the array and shifting the first one
  let thirdHighest = arr.slice(-3).shift();
  // Return the result as a string
  return `Third highest: ${thirdHighest}, Third lowest: ${thirdLowest}`;
}

// An example array
let arr = [4, 2, 8, 6, 10, 12, 1, 3, 5, 7, 9, 11];
// Log the result of the function
console.log(thirdHighestAndLowest(arr));
