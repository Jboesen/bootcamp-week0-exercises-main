// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  if (!str || str.length === 1) {
    return str;
  }
  let temp = "";
  const len = str.length;
  for (let i = 0; i < str.length / 2; i++) {
    temp = str[i];
    str[i] = str[len - i];
    str[len - i] = temp;
  }
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return -1;
  }
  n = arr1.length;
  let result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(2);
    result[i][0] = arr1[i];
    result[i][1] = arr2[i];
  }
  return result;
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  let arr1 = new Array();
  let arr2 = new Array();
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    arr[i][0] = arr1[i];
    arr[i][1] = arr2[i];
  }
  return { arr1, arr2 };
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  const last_n = str.substring(str.length - 1 - num);
  const rest = str.substring(0, str.length - 1 - num);
  return last_n + rest;
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => { }

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
