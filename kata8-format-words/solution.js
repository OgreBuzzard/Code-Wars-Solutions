function formatWords(words){
    if (words == null) {
      return '';
    }
    const wordsFil = words.filter(word => word !== '');
    let last = wordsFil.length - 1;
    if (wordsFil.length > 1) {
        wordsFil[last] = "and " + wordsFil[last];
    }
    let str = wordsFil.join(', ').replace(', and', ' and');
    console.log(str);
    return str;
  }