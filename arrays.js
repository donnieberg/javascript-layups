// JS Array Method Examples
//==============================================================
//1. Replacing elements in array
var greetings = ["hello", "hola", "bonjour", "hallo", "nihao"];

//greetings.shift();
//greetings.unshift("howdy");

greetings.splice(0, 1, "howdy");

//replace "hello" with "howdy"
//console.log(greetings);

/*
var upperCaseGreetings = greetings.map(function(greeting){
  return greeting.toUpperCase();
});

console.log(upperCaseGreetings);
*/

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

  this.sortObjs = function(unsortedArray){
    var sortedArray = unsortedArray.sort(function(a, b){
      if(a === b){
        return 0;
      }else if (typeof a === typeof b){
        return a > b ? 1 : -1
      }else{
        return typeof a > typeof b ? 1 : -1
      }
    });

    return sortedArray;
  }


  //2. create a class method called flattenArray that takes in a nested array and returns a flat array (ie. [[1,2], [3, 4]] ==> [1, 2, 3, 4])
  //hint: use reduce() and concat()

  this.flattenArray = function(nestedArray){
    var flatArray = nestedArray.reduce(function(a, b){
      return a.concat(b);
    });

    return flatArray;
  }

};

//TESTS
var testArray = new SuperArray();

var mixArr = ['aa', 'bb', 'a', 4, 8, 42, 103, 'c', 15, 76, 23, 42];
var sortedArr = testArray.sortObjs(mixArr);
console.log(sortedArr);

//---------------------
var nestedArr = [[1,2,3], [4,5,6], [7,8,9]];
var flatArr
console.log(flatArr);
