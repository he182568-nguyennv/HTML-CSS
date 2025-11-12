// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for(let i = 0 ; i< numbers.length; i++){
//   sum += numbers[i];
// }
// console.log(sum)

// var symbolB1 = Symbol("Tom");
// var symbolB2 = Symbol("Tom");

// console.log(symbolB1); // Symbol(Tom)
// console.log(symbolB2); // Symbol(Tom)
// console.log(symbolB1 === symbolB2); // false

// var symbolA1 = Symbol();
// var symbolA2 = Symbol();

// console.log(symbolA1); // Symbol()
// console.log(symbolA2); // Symbol()
// console.log(symbolA1 === symbolA2); // false

// var key1 = Symbol();
// var key2 = Symbol("Something");
// var key3 = Symbol("Something");

// var map = new Map();

// map.set(key1, "Tom");
// map.set("a_string_key", "Donald");
// map.set(key2, "Jerry");
// map.set(key3, "Mickey");

// console.log("---------")

// for(index of map){

//   console.log(index)
// }
// console.log("---+++-----")
// map.forEach((key,value)=>{

//   console.log(`${key}`)
// })
// console.log('***********')
// const myMapKeys = map.keys();
// for(const key of myMapKeys){
//   console.log(key)
// }

// console.log(key2===key3);

// const log1 = Symbol.for("Tom");
// const log2354 = Symbol.for("Tom");

// console.log(log1 === log2354);

// console.log(log1)
// console.log(key2)

// const sym1 = Symbol();
// const sym2 = Symbol("Test");
// const someObject = {
//   name: 'Tom',
//   age: 25,
//   [sym1]: 'Some Hidden Metadata 1',
//   [sym2]: 'Some Hidden Metadata 2'
// }
// someObject[sym1] = "Nguyen";
// console.log(someObject[sym1]);
// console.log(sym1)

// var arr= [ 6,9,3,12,21]
// 				const arr1 = arr.map((n)=> n*2)
// 						.filter((n) => n %6==0 && n> 12)
// 						.map((n) => `số : ${n}`)
//             console.log(arr1)

//             var array1 = [10, 20, 30, 10, 40, 10, 50];

// var idx = array1.lastIndexOf(10, 3);
// console.log(idx); // 3

// const arra = [1,6,2,4,8,3,6,9,2];

// arra.sort();
// console.log(arra);

// let x = 0.1 +0.2;
// let y = 0.3
// console.log(x===y) ;// false
// console.log(Math.abs(x-y) < Number.EPSILON);

// let a1 = Number.NaN;
// console.log(a1)
// let a2 ="String" * 12;
// console.log(a2)

// let a = new Number("100.23");
// console.log(Number.parseFloat(a));
// console.log(a);

// let num = new Number(110);
// console.log(num.toString()); //110
// console.log(num.toString(2)); // 6
// console.log(typeof(num.toString(8))); // 6

// console.log(typeof(num.valueOf()));

// const string = "Hello World"
// const str5 = string.substring(3,-2);
// const str4 = string.slice(3,-2);
// console.log(str5);
// console.log(str4);
// var a3 = 123;
//  a3 = null;
// console.log(a3 == null); // true
// let a78 ;
// console.log(typeof(a3));
// console.log(typeof(a78));

// console.log("abc",NaN);

// const foo = [1, 2];
// const bar = foo;

// bar[0] = 9;
// console.log(foo)
// console.log(foo[0], bar[0]); // => 9, 9

// function getKey(k) {
//   return `a key named ${k}`;
// }

// // good
// function sayHi(name) {
//   return `How are you, ${name}?`;
// }
// const nguyen ="nguyen"
// console.log(sayHi(nguyen))

//  function add(a,b){
//   console.log(arguments);
// }
// add(0,1);

// const xa = [1, 2, 3, 4, 5];
// console.log.apply(console, xa);
// // bad
// const value1 = 0 ?? 'default';
// console.log(value1);
// // returns 0, not 'default'

// // bad
// const value2 = null ?? undefined;
// // returns '', not 'default'
// console.log(value2)
// // good
// const valu3e = null ?? 'default';
// // returns 'default'
// console.log(valu3e)
// // good
// const user = {
//   name: 'John',
//   age: null
// };

// const age = user.age ?? 18;
// // returns 18
// console.log(age)

/**
 * Reduce
 */

const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map((item) => item * 2);
console.log(arr2);

const a = arr.reduce((acc, item) => {
  acc.push(item * 2);
  return acc;
}, []);

const str = ['i', 'like', 'MU'];
const b = str.reduce((args, item) => {
  args = `${args} ${item}`;
  return args;
}, '');

console.log(b);

const obj = ['a', 'a', 'b', 'c', 't', 'q', 'b', 'c', 't', 'a', 'q'];
const c = obj.reduce((abc, item) => {
  if (Object.hasOwn(abc, item)) {
    abc[item] += 1;
  } else {
    abc[item] = 1;
  }
  return abc;
}, {});
/*
  => reduce tra ve mot gia tri duy nhat chu khong phai tra ve mot so
*/
console.log(c);

const num = 723.43;
console.log(num.toFixed(2)); // => hien thi bao nhieu so sau dau phay (co lam tron)
console.log(num.toPrecision(3)); // => dung de lam tron so

const arr12 = ['suten 1', 'abc', '123'];
for (const index in arr12) {
  console.log(index);
}

const arr123 = Array.from({ length: 1_000_000 }, (_, i) => i);

console.time('for ');
for (let i = 0; i < arr123.length; i++) {
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

const object = {
  1: 'a',
  2: 'b',
  3: 'c',
};
const arr789 = Object.entries(object);

const iterator = arr789[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

Array.prototype.nguyen = 'nguyen123';
const a23 = [1, 2, 3, 6, 4, 8, 10, 15];
a23.customName = 'nguyen';

console.log('for thuong');
for (let i = 0; i < a23.length - 2; i += 2) {
  console.log(a23[i]);
}

console.log('for of');

let i = 0;
for (const value of a23) {
  if (i % 2 === 0 && i < a23.length - 2) {
    console.log(value);
  }
  i++;
}

console.log('for in');
for (const i in a23) {
  console.log(a23[i]);
}

const huy = 1;
const m = 1n;
const n = Symbol('mnb');
console.log(Object.getPrototypeOf(huy) === Number.prototype);

console.log(Object.getPrototypeOf(n) === Symbol.prototype);

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

const map = Object.create(null);

key1 = { 1: 'a', 2: 'b' };
key2 = {};
map[key1] = '1man';

console.log(map[key2]);

const map1 = new Map([[1, 'one']]);
const obj5 = Object.entries(map1);

const map3 = new Map(Object.entries(key1));
console.log(map3);

console.log(typeof obj5);
console.log('map');
console.log(map1);
const arr10 = [1, 2, 3];
const set2 = new Set(['a', 'a', 'c', 'a', 'b', 'c']);
const set3 = new Set(['a', 'l', 'm', 'k', 'b']);

console.log(map1.get(1));

const arr77 = Array.from(set2);
console.log(arr77);
console.log(arr77 instanceof Array);

const mappedSet = set2
  .values()
  .map((x) => `${x}abc`)
  .toArray();
console.log(mappedSet);

// const weakSet1 = new WeakSet();

// const fb = {};

// const yt ={};
// weakSet1.add(fb);
// weakSet1.add(yt);

// console.log(weakSet1.has(fb));

// fb = null;

const obj6 = {
  a: 1,
  b: 2,
};

const map4 = new Map(Object.entries(obj6));
console.log(map4);

const map10 = new Map().set(1, '1a').set(2, '1b').set(3, '1c');
const map20 = new Map().set(2, '2b').set(3, '2c').set(4, '2d');
const combinedMap = new Map([...map10, ...map20]);
console.log(combinedMap);

const mappedMap = [...combinedMap].filter(([k, v]) => k % 2 == 0);

console.log(mappedMap);
