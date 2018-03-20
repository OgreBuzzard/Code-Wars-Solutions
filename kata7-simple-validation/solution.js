function isNice(arr) {
  console.log(arr)
  let nice = false;
  for (let i = 0; i < arr.length; i++) {
    console.log(nice)
    if(arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) {
      nice = true;
    } else {
      nice = false;
      break;
    }
  }
  return nice;
}