const fibonacci = function (indice) {
  let arr = [0, 1, 1];

  for (let i = 3; i < 30; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  if (indice < 0) {
    return "OOPS";
  }
  return arr[indice];
};

// Do not edit below this line
module.exports = fibonacci;
