function abbrevName(name){

    var nameArray = name.split(' ');
    var first = nameArray[0].charAt(0).toUpperCase();
    var last = nameArray[1].charAt(0).toUpperCase();
    return `${first}.${last}`
}
