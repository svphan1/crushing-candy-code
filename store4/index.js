var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^

// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {

}

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {

}

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  // declare a variable and assign to empty array
  let candiesOverTwoDollars = [];

  // loop over store4, if candy cost more than $2, push to candiesOverTwoDollars, return it
  for (let key in store4) {
    if (store4[key]['cost'] > 2) {
      candiesOverTwoDollars.push(key);
    }
  }
  return candiesOverTwoDollars;
}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
   // declare a variable and assign to empty object
  let candyCosts = {};
  // loop over store 4, return the candyCosts object with the candy name as key and cost as the value
  for (let key in store4) {
    candyCosts[key] = store4[key]['cost'];
  }
  return candyCosts;
}

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points. Return your answer as an array: `[total1, total2]`
function challenge1() {

}

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {

}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
