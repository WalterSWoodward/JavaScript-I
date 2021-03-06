const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
};

const sumNums = (x, y, cb) => {
// sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  cb(list.includes(item)); // .includes serves this function very nicely
};

// QUESTIONS:

// if (indexOf.list(item) === true ) { // Is there a way to use indexOf?
//   return cb(true);
// } return cb(false);

// for (var i = 0 ; i < list.length ; i++) { // Not sure why this does not work?
//   if (list[i] === item) {
//     return cb(true);
//   } return cb(false);
// };

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  //
  //  Solution Using .filter:
  //
  // let newArr = array.filter(function(elem, index, self) { // .filter creates a new array with all elements that pass the test implemented
  //   return index = self.indexOf(elem);
  // });
  // return cb(newArr);

  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) {
      newArr.push(array[i]);
    }
  }
  return cb(newArr);
};
/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates,
};
