function validatePIN (pin) {
    let p = pin.toString();
    for(let i = 0; i < p.length; i++) {
      if(isNaN(p[i])) {
        return false;
      }
    }
    if((p.length === 4) || (p.length === 6)) {
      return true;
    } else {
      return false;
    }
  }

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}