//==============================================================
// I. Create a SuperString class - Add three mehtods (instructions below) to make the "tests" pass
//==============================================================
function SuperString(){
  //1. create a class method called countChar that takes two parameters ("string", "char") and returns how many times the character shows up in the string.
  //hint: create a counter variable and loop over the string incrementing the counter if you come across it.

  //2. create a class method called countUniqLetters that takes a parameter "string" and returns the number of unique letters of the string
  //hint: loop over the string and store letters in something. At same time, use indexOf() to check if each letter already exists in the stored letters.

  //3. create a class method called letterCount that takes a parameter "string" and "returns an object containing the letters and how many times they appear in the string. ie. bob { b: 2, o: 1}
  //hint: create a "tracker" object and then loop over the string and see if the letter already exists. If so, increment the count, if not, add the letter to the object with a count of 1.
}

//Tests
var testString = new SuperString();
var name = "Donielle Berg";
var uniqCount = testString.countUniqLetters(name);
var letterCount = testString.letterCount(name);

console.log(name + " has " + uniqCount + " unique letters.");
console.log("the letter count of " + name + " is " + letterCount);

