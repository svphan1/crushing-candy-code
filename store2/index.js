var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {

}

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {

}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
  let wafersPrice = store2['inventory prices']['Mint Wafers'];
  wafersPrice = 1.99;
  return false;

  /* The price in the store2 data does not change because store2 is an object type.
  Objects are passed by reference. This means that reassigning the original 
  wafersPrice to a new price only only changes the reference pointer to a new price without 
  altering the original data.
  */
}

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  let caramelSaleDates = store2['sale dates']['Caramel Twists'];
  caramelSaleDates.pop();

  return true;

  /* The variable caramelSalesDates matches up with the data in store2 after the .pop() method
  because .pop() is a mutating method. Since both points to the same spot in memory, .pop() will return our data, mutated. In order 
  to not mutate the original data, a method such as .filter() should be used */
}

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {

}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {

}

/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {

}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
