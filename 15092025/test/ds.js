/** Set */

const a = new Set(['a', 'b', 'c', 'd', 'e', 'f']);

const b = new Array(...a);

console.log(Array.isArray(b));

console.log(a instanceof Set);

const set = new Set([1, 2, 3, 4, 5, 6]);
const setArr = new Array(...set);
console.log('Set Map');
const arr1 = setArr.map((i) => i * 2);
console.log(arr1);

console.log('Set Filter');
const setFilter = arr1.filter((i) => i > 8);
console.log(setFilter);

console.log('Set Reduce');
const setReduce = arr1.reduce((arr, index) => {
  arr.push(index * 2);
  return arr;
}, []);

console.log(setReduce);

/** Map */

const map = new Map([
  [1, 5],
  [2, 2],
  [3, 3],
  [4, 5],
]);

map.set(1, 1);
console.log(map);

const arr = new Array(...map);

const obj = Object.entries(map);

const obj1 = {
  1: 'a',
  2: 'b',
  3: 'c',
};
const map1 = new Map(Object.entries(obj1));
console.log(map1 instanceof Object);
console.log(obj instanceof Map);

console.log('Map using map()');
const arr2 = arr.map(([index, value]) => [index, value * 2]);
console.log(arr2);

console.log('Map using filter');
const arr3 = arr2.filter(([key, value]) => key > 1 && value > 4);
console.log(arr3);

console.log('Map using Reduce');

const arr4 = arr2.reduce((arr, index) => {
  arr.push(index.reduce((sum, index1) => sum + index1, 0));
  return arr;
}, []);

console.log(arr4);

const map2 = new Map(Object.entries(arr4));

console.log(map2 instanceof Map);
