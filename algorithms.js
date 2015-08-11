//==============================================================
// 1. Test if two strings are anagram - rearrange letters from one word to make a new word
//

var isAnagram = function(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  if (word1.length !== word2.length){
    return false;
  }else{
    var word1Letters = word1.split('').sort().join();
    var word2Letters = word2.split('').sort().join();

    return word1Letters === word2Letters;
    /*
    for(var i = 0; i < word1Letters.length; i++ ){
      if (word1Letters[i] !== word2Letters[i]){
        return false;
      }
    };
    return true;
    */
  }
  //return true or false
};
/*
console.log("mary and army are anagrams: ", isAnagram("mary", "army"));
//===> true
console.log("bob and army are anagrams: ", isAnagram("bob", "army"));
//===> false
console.log("aces and case are anagrams: ", isAnagram("aces", "case"));
//===> true


//==============================================================
// 2. Test if num is prime - not divisible by any number except 1 and itself
//
var isPrime = function(num) {
  //check if num is a number
  if (typeof num === 'number'){
    if (num < 2){
      return false;
    }else if (num === 2){
      return true;
    }else if (num % 2 === 0){
      return false;
    }else{
      for(var i = 3; i <= Math.sqrt(num) ; i += 2){
        if (num % i === 0){
          return false;
        }
      };
    };

    return true;
  }
  //if num is < 2 then it's not a prime
  //if num is 2, then it is a prime
  //if num is even, then it's not a prime
  //if odd, then let's check if it's divisible by odd numbers
};

console.log("64 is prime: ", isPrime(64));
//===> false
console.log("2 is prime: ", isPrime(2));
console.log("107 is prime: ", isPrime(107));
//===> true
*/


//==============================================================
// 3. Reverse array - most optimized way
//
/*var reverse = function(array) {
  var reverseArray = [];

  for (var i = 0; i < array.length; i++){
    reverseArray.unshift(array[i]);
  };

  return reverseArray
};*/

var reverse = function(array){
  var left;
  var right;

  for (var i = 0; i <= array.length/2; i++){
    //set left & right storage variables
    left = array[i];
    right = array[(array.length - 1) - i];

    //swap left and right with storage variables
    array[i] = right;
    array[(array.length - 1) - i] = left;
  };

  return array;
};

console.log("the reverse of [1,2,3,4,5,6] is: ", reverse([1,2,3,4,5,6]));
//===> [6,5,4,3,2,1]
console.log("the reverse of [1,2,3,4,5,6,7] is: ", reverse([1,2,3,4,5,6,7]));
//===> [7,6,5,4,3,2,1]


/*
//==============================================================
// 4. Check if string is palindrome - one word is the same spelled forwards and backwards
//
var isPalindrome = function(string) {
};

console.log("racecar is a palindrome: ", isPalindrome("racecar"));
//===> true
console.log("ricky is a palindrome: ", isPalindrome("ricky"));
//===> false



//==============================================================
// 5. Recursive Fibonnacci with memoization
//

var fibonnacci = function() {
}();

var fib50 = fibonnacci(50);
console.log("the fibonnacci of 50 is: ", fib50);
//===> 12586269025
*/
