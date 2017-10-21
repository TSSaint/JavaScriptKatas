// Given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){

  // set variables
  var wordsArr;
  var sortedWordsArr;
  var shortestWord;
  
  // set wordsArr. Split the input by word
  wordsArr = s.split(" ");
  // console.log(wordsArr.length);
  // console.log(wordsArr);
  
  // set sortedWordsArr. Sort in order of longest to shortest
  sortedWordsArr = wordsArr.sort(function(a, b) {
    return b.length-a.length;
  });
  // console.log(sortedWordsArr);
  
  // set shortestWord. take sortedWordsArr and pop the last item in array
  shortestWord = sortedWordsArr.pop();

  // show the shortest word
  console.log(shortestWord);
  return shortestWord;
  return shortestWord.length;
};
