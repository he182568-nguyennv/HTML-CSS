const myArr = [1, 2, 3, 4, 5, 6, 7];

let count = 0;
const myArr2 = {
  [Symbol.iterator]() {
    return {
      next() {
        if (count < myArr.length) {
          return {
            value: myArr[count++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};
for (const i of myArr) {
  console.log(i);
}
