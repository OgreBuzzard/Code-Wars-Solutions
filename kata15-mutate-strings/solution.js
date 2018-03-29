function mutateMyStrings(stringOne, stringTwo){
    let arrOne = stringOne.split('');
    let mutation = arrOne.join('')+'\n';
    arrOne.forEach((el, i) => {
      if(arrOne[i]!=stringTwo.charAt(i)) {
        arrOne.splice(i, 1, stringTwo.charAt(i));
        mutation = mutation.concat(arrOne.join('')+'\n');
      }
    })
    return mutation;
  }