const sumAll = function (var1, var2) {
  let total = 0;
  let start = 0;
  let end = 0;
  if (var1 < 0 || var2 < 0 || typeof var1 != "number" || typeof var2 != "number") {
    return "ERROR";
  }
  if (var1 < var2) {
    start = var1;
    end = var2;
  } else {
    start = var2;
    end = var1;
  }
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
