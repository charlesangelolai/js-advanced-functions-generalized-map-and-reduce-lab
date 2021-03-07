// Add your functions here
function map(array, func) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }

  return newArray;
}

function reduce(array, func, start = 0) {
  let newArray = array[start];

  for (let i = start; i < array.length; i++) {
    newArray = func(array[i]);
  }

  return newArray;
}
