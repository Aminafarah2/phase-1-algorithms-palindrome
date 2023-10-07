function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfWords = word.split('')
  const reverseLetters = arrayOfWords.reverse()
  const reverseStrings = reverseLetters.join('')
  // console.log(arrayOfWords)

  if (word == reverseStrings){
    return true
  } else {
    return false
  }

}

  


/* 
  Add your pseudocode here
*/
// 1;Function isPandlindrome has to take a srting as a parameter
//2; If the string isPandlindrome the function should return true
//3;If not it will return false
/*
  Add written explanation of your solution here
*/// The function takes the word and splits each letter into an array, then the array is reversed. 
  // The array is then joined again into a word. 
 // Then we compare if the orginal word is the same as the reversed word. 
 //If true then it returns true, or else it will return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log('Expecting: false')
  console.log('=>', isPalindrome('girl'));

  

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
