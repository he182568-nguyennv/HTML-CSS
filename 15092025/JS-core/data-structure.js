// Map & WeakMap

// Map

const map = new Map([
  [0, 'a'],
  [1, 'b'],
  [2, 'c'],
  [4, 'd'],
  [3, 'e'],
]);

map.set(5, 'f');
console.log(map);

const val = map.get(2);
console.log(val);

// Trả về một iterator key của map
console.log(map.keys());

// Trả về một iterator value() của map
console.log(map.values());

// Trả về độ dài của map
console.log(map.size);

// Kiểm tra 1 key xem có tồn tại trong map đó không
console.log(map.has());

// Chuyển map thành object và ngược lại
const objMap = {
  1: 'a',
  2: 'b',
  3: 'd',
};

const map2 = new Map(Object.entries(objMap));
console.log(map2 instanceof Map);

const objMap2 = Object.entries(map);
console.log(objMap2 instanceof Map);

// Dùng map(), filter(), reduce(), forEach() với Map
const arrMap = new Array(...map);
console.log(arrMap instanceof Map);

// forEach()
arrMap.forEach(([key, value]) => {
  console.log(`${key + 12}`, `${value}100`);
});

// map()
const testMap = arrMap.map(([index, value]) => {
  return [index * 2, `${value}MU`];
});
console.log(testMap);

// filter()
const testFilter = arrMap.filter(([index, value]) => index > 3);
console.log(testFilter);

// reduce()
const testReduce = arrMap.reduce((arr, index) => {
  arr.push(index.reduce((sum, index2) => (sum += index2), 0));
  return arr;
}, []);
console.log(testReduce);
const nguyen = { 1: 'MU' };

// WeakMap
const weakMap = new WeakMap();
weakMap.set(nguyen, 'nguyen');

// Error: weakMap ko có thuộc tính size và phương thức forEach()
console.log(weakMap.size);
console.log(weakMap.has(nguyen));

console.log('--------------SET & WEAKSET---------------');
// Set & WeakSet

// Set
const set = new Set(['nguyen', 'van', 'nguyen2']);
set.add('van2');

// phương thức has() và thuộc tính size
console.log(set.has('nguyen'));
console.log(set.size);

// phương thức delete() và clear()
set.delete('nguyen');
set.clear();
console.log(set);

// Set --> Array : Array.from() và Spread
const arrSet = Array.from(set);
console.log(arrSet instanceof Array);
const arrSet2 = [...set];
console.log(arrSet2 instanceof Array);

// Array --> Set
const set2 = new Set([...arrSet]);
console.log(set2 instanceof Set);
const set3 = new Set(arrSet2);
console.log(set3 instanceof Set);

// map(), filter(), forEach() & reduce()
const set4 = new Set([1, 2, 3, 'a', 5]);
const arrSet3 = [...set4];

// Map
const arrSetMap = arrSet3.map((val) => val * 2);
console.log(arrSetMap);

// filter
const arrSetFilter = arrSet3.filter((val) => Number.isInteger(val));
console.log(arrSetFilter);

// forEach()
arrSet3.forEach((val) => console.log(`${val}MU`));

// reduce()
const arrSetReduce = arrSet3.reduce((sum, val) => (sum += val), 0);
console.log(arrSetReduce);

// value()
console.log(set4.values());

// WeakSet
console.log('----------WeakSet----------');

const weakSet = new WeakSet();
const nguyen2 = { 2: 'Spain' };
const nguyen3 = { 3: 'nguyen' };
weakSet.add(nguyen2);
weakSet.add(nguyen3);
console.log(weakSet.size);
weakSet.delete(nguyen3);
console.log(weakSet.has(nguyen2));
console.log(weakSet);

const arrReduce = [1, 2, 3, 4, 5];
const arrReduce2 = arrReduce.reduce((arr, index) => {
  arr.push(index * 2);
  return arr;
}, []);

console.log(arrReduce2);
const number = 13.3254;
console.log(number.toFixed(2));
console.log(number.toPrecision(4));
