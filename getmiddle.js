// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
#Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  // set variables
  // console.log(s.length);
  var stringArr;
  var middleChar;
  var middleChars = [];
  var theMiddle;
  
  // break the string into an array
  stringArr = s.split("");
  console.log("This string is " + stringArr.length + " letters long.");
  // console.log(stringArr);
  
  if (stringArr.length <= 0) {
    console.log("That isn't going to work. There is nothing in there.");
    
  } else if (stringArr.length % 2 === 0) {
    console.log('Even number of letters!');
    
    // set middleChar to the value of the index at the middle of stringArr and round up
    middleChar = Math.ceil((stringArr.length/2));
  
    // set theMiddle to be equal to the middleChars
    middleChars.push(stringArr[middleChar - 1]);
    middleChars.push(stringArr[middleChar]);
    console.log(middleChars);
    theMiddle = middleChars.join('');
    console.log("The middle letters are '" + theMiddle + "'.");
    return theMiddle;
  
  } else if (stringArr % 2 !== 0) {
    console.log('Odd number of letters!');
    
    // set theMiddle to be the index in the middle
    middleChar = Math.ceil(((stringArr.length - 1)/2));
    theMiddle = stringArr[middleChar];
    console.log(middleChar);
    console.log("The middle letter is " + theMiddle + ".");
    return theMiddle;
  };
  
};
