function cubeOdd(arr) {
    let cubed = arr.map(el=>Math.pow(el,3));
    if (cubed.includes(NaN)==true) return;
    return cubed.filter(el=>Math.abs(el%2)).reduce((a,b)=>a+b,0);
  }