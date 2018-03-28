function high(x){
    const alphabet = ('abcdefghijklmnopqrstuvwxyz');
    let wordArr = x.split(' ');
    let wordValues = wordArr.map(word => word.split(''))
      .map((word => word
      .map(letter => letter = alphabet.indexOf(letter))))
      .map(word => word
      .reduce((acc, curr) => acc + curr, 0));
    let topIndex = wordValues
      .findIndex(word => word==Math.max(...wordValues));
    return wordArr[topIndex];
  }