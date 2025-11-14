/* Callback Function */

const arr = [1, 2, 3, 4];

Array.prototype.nhanDoiMang = function (callback) {
  const { length } = this;
  const output = [];
  for (let i = 0; i < length; i += 1) {
    const value = callback(this[i] * 2, i);
    output.push(value);
  }
  return output;
};
const abc = arr.nhanDoiMang((ar) => `${ar}`);
console.log(abc);

Set.prototype.kiemTraSet = function (callback) {
  for (const i of this) {
    if (callback(i)) {
      return true;
    }
  }
  return false;
};
const set = new Set(['a', 'b', 'c', 'a', 'd', 'd']);
const x = set.kiemTraSet((s) => s === 'd');
console.log(x);
