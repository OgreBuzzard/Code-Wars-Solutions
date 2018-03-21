function checkExam(array1, array2) {
    let score = 0;
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] === array2[i]) {
        score = (score + 4);
      } else if(array2[i] === '') {
        score;
      } else if(array1[i] !== array2[i]) {
        score--;
      }
    }
    if(score > 0) {
    return score;
    } else { 
      return 0;
    }
  }