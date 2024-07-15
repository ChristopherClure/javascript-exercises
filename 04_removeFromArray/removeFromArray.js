const removeFromArray = function(enteredArray) {
  for (let i = 1 ; i < arguments.length ; i++) {
    while (true) {
    let index = enteredArray.indexOf(arguments[i]);
    if (index === -1) {
      break;
    }
    enteredArray.splice(index, 1);
    }
  };
  return enteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
