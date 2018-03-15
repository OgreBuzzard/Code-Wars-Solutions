function insertDash(num) {
// turn the number into a string and split
  var numArray = num.toString().split('');
// create an incrementing for loop that tests if both the current character and the next character is odd
  for(let i = 0; i -1 < numArray.length; i++) {
    if((numArray[i] % 2 === 1) && (numArray[i + 1] % 2 === 1)) {
// if both are odd, splice in a dash between them
      numArray.splice(i + 1, 0, '-');
    }
  }
// join the array back into a string
   numStr = numArray.join('');
// return the string
  return numStr;
}