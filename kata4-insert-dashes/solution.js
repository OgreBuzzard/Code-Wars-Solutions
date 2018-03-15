function insertDash(num) {
  var numArray = num.toString().split('');
  for(let i = 0; i -1 < numArray.length; i++) {
    if((numArray[i] % 2 === 1) && (numArray[i + 1] % 2 === 1)) {
      numArray.splice(i + 1, 0, '-');
    }
  }
   numStr = numArray.join('');
  return numStr;
}
