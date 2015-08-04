// JS String Method Examples
//==============================================================
// 1. indexOf()
var sentence = "The big red dog runs fast.";

var redSearch = sentence.indexOf('red');
var fullStop = sentence.indexOf('.');

// 2. concat() is the same as +=
var first = "Ricky";
var last = "Holtz";

var fullName = first.concat(" " + last);

// 3. slice()
var instructions = "1. Go forward three steps.";

var instructionText = instructions.slice(3);

// 4. split()
var months = "Jan, Feb, March, April, May, June, July, Aug, Sept, Oct, Nov, Dec";

var monthArray = months.split(', ');

// CHALLENGES
//==============================================================
// I. Create a SuperString class - Add three mehtods (instructions below) to make the "tests" pass
//==============================================================
function SuperString(){
  //1. create a class method called countChar that takes two parameters ("string", "char") and returns how many times the character shows up in the string.
  //hint: create a counter variable and loop over the string incrementing the counter if you come across it.
  this.countChar = function(string, char){
    var charCount = 0;

    for(var i = 0; i < string.length ; i++){
      if (string[i] === char) {
        charCount += 1;
      }
    };

    return charCount;
  };

  //2. create a class method called countUniqLetters that takes a parameter "string" and returns the number of unique letters of the string
  //hint: loop over the string and store letters in something. At same time, use indexOf() to check if each letter already exists in the stored letters.
  this.countUniqLetters = function(string){
    var uniqLetters = '';

    string = string.split(' ').join('');
    string = string.toLowerCase();

    for(var i = 0; i < string.length; i++){
      if (uniqLetters.indexOf(string[i]) === -1){
        uniqLetters += string[i];
      }
    };

    return uniqLetters.length;
  };

  //3. create a class method called letterCount that takes a parameter "string" and "returns an object containing the letters and how many times they appear in the string. ie. bob { b: 2, o: 1}
  //hint: create a "tracker" object and then loop over the string and see if the letter already exists. If so, increment the count, if not, add the letter to the object with a count of 1.
  this.letterCount = function(string){
    var letterCountObj = { };

    string = string.split(' ').join('');
    string = string.toLowerCase();

    for(var i = 0; i < string.length; i++ ){
      var currentLetter = string[i];
      if(typeof letterCountObj[currentLetter] !== 'number'){
        letterCountObj[currentLetter] = 1;
      }else{
        letterCountObj[currentLetter] += 1;
      }
    };

    return letterCountObj;
  };

}

//Tests
var testString = new SuperString();
var name = "Donielle Berg";
var countChar = testString.countChar(name, 'i');
console.log(countChar);
var uniqCount = testString.countUniqLetters(name);
var letterCount = testString.letterCount(name);

console.log(name + " has " + uniqCount + " unique letters.");
console.log("the letter count of " + name + " is ", letterCount);
