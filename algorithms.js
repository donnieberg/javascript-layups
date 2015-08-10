//==============================================================
// 1. Test if two strings are anagram - rearrange letters from one word to make a new word
//
var isAnagram = function() {
};
console.log("mary and army are anagrams: ", isAnagram("mary", "army"));
//===> true
console.log("bob and army are anagrams: ", isAnagram("bob", "army"));
//===> false

//==============================================================
// 2. Test if num is prime - not divisible by any number except 1 and itself
//
var isPrime = function(num) {
  //check if num is a number
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



//==============================================================
// 3. Reverse array - most optimized way
//
var reverse = function(array) {
};
console.log("the reverse of [1,2,3,4,5,6] is: ", reverse([1,2,3,4,5,6]));
//===> [6,5,4,3,2,1]



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



