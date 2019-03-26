var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {

}

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {

}

// Return total number of dates included in the dataset.
function accessesingData3() {

}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {

}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {

}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {

}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {
  let salesJan9 = store3[3]['inventory sold'];
  let income = 0;

  for (let key in salesJan9) {
    let cost = salesJan9[key]['cost'];
    let quantity = salesJan9[key]['quantity'];
    let total = cost * quantity;
    income += total + income;
  }
  return income.toFixed(2);
}

module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
