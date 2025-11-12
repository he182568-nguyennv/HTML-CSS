console.log('-------------For Loops-------------');
const arr123 = Array.from({ length: 1_000_000 }, (_, i) => i);

console.time('for ');
for (let i = 0; i < arr123.length; i += 1) {
  const x = arr123[i] * 2;
}
console.timeEnd('for ');

console.time('forEach ');
arr123.forEach((x) => x * 2);
console.timeEnd('forEach ');

console.time('for of');
for (const i of arr123) {
  const z = arr123[i] * 2;
}
console.timeEnd('for of');

console.time('for in');
for (const i in arr123) {
  const t = i * 2;
}
console.timeEnd('for in');

const arr = [1, 2, 3, 4, 5, 6];
Array.prototype.nguyen = 'nguyen123';
for (const i in arr) {
  console.log(arr[i]);
}
