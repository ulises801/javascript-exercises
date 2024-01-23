const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let count = 0;
  if (arr.length === 0) {
    return count;
  } else {
    for (let i = 0; i < arr.length; i++) {
      count = count + arr[i];
    }
    return count;
  }
};

const multiply = function (arr) {
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    count = count * arr[i];
  }
  return count;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let fact = 2;
  if (num == 0 || num == 1) {
    return 1;
  } else {
    for (let i = 3; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
