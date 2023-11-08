// задача №1
const fill = (arraySize, value) => {
  return Array(arraySize).fill(value);
};

const arraySize = 3;
const valueToFill = 'a';
console.log(fill(arraySize, valueToFill));

// задача №2
const reverse = (array) => {
  return array.reverse();
};

const dataArray = [1, 2, 3];
console.log(reverse(dataArray)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== 0 && array[i] !== false && array[i] !== undefined && array[i] !== '' && array[i] !== null) {
      result.push(array[i]);
    }
  }
  return result;
};

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)); // [1, 2, 3]
