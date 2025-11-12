const a = 712.365;
console.log(a.toFixed(3));
console.log(a.toPrecision(3));

const arr = [1, 3, 4, 5];
console.log(
  arr.reduce((arr, index) => {
    arr.push(index * 2);
    return arr;
  }, []),
);
const fn = (a, b) => {
  return a * b;
};

console.log(fn(1, 'nguyen'));
