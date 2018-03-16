function capitalize(s){
    let sArray = s.split('');
    let sEvens = [];
    let sOdds = [];
    sArray.forEach(function(letter, i) {
      if (i % 2 == 0) {
        sEvens.push(letter.toUpperCase())
        sOdds.push(letter)
      } else {
      sEvens.push(letter);
      sOdds.push(letter.toUpperCase())
      }
    })
    return [sEvens.join(''), sOdds.join('')];
  };