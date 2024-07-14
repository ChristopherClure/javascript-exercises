const reverseString = function(string) {
  charArray = string.split("");
  reverseArray = [];
  for (let i = charArray.length - 1; i>=0; i--) {
    reverseArray.push(charArray[i]);
  }
  return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
