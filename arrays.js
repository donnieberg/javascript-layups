// JS Array Method Examples
//==============================================================
//1. Replacing elements in array
var greetings = ["hello", "hola", "bonjour", "hallo", "nihao"];

//replace "hello" with "howdy"
console.log(greetings);


// CHALLENGES
//==============================================================
// I. Create a SuperArray class - Add three mehtods (instructions below) to make the "tests" pass
//==============================================================
function SuperArray(){
  //1. create a class method called sortObjs that takes in an array of strings and numbers and returns the sorted array in ascending
  //hints
  //a. use sort() to compare two values at a time
  //b. first check if the two items equal each other
  //c. secondly, check if the two items are the same data types and compare those
  //d. if they're not the same data type, then you'll need to compare the typeof for both items


  //2. create a class method called flattenArray that takes in a nested array and returns a flat array (ie. [[1,2], [3, 4]] ==> [1, 2, 3, 4])
  //hint: use reduce() and concat()

};

//TESTS
var myArr = new SuperArray();

var mixArr = ['aa', 'bb', 'a', 4, 8, 42, 103, 'c', 15, 76, 23, 42];
//var sortedArr = myArr.sortObjs(mixArr);
//console.log(sortedArr);

//---------------------
var nestedArr = [[1,2,3], [4,5,6], [7,8,9]];
//var flatArr = myArr.flattenArray(nestedArr);
//console.log(flatArr);


