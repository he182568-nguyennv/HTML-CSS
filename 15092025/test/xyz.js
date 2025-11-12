const a = [1, 2, 3, 4, 5, 6, 1, 1, 2, 5, 6];
const b = a.reduce((x, y) => {
  x.push(y * 2);
  return x;
}, []);
console.log(b);

const z = a.reduce((x, y) => {
  if (Object.hasOwn(x, y)) {
    x[y] += 1;
  } else {
    x[y] = 1;
  }

  return x;
}, {});

console.log(z);

const str = a.reduce((x, y) => {
  x = `${x}${y}`;
  return x;
}, '');

console.log(str);

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

// order pizza

// function orderPizza(callback){
//     console.log('Dang lam Pizza');
//     setTimeout(()=>{
//         let pizza = 'pizza thuong'
//         console.log('Hoan thanh ');
//         callback(pizza);
//     },1500);
// }

// orderPizza((pizza)=>{
//     console.log('da lam xong',pizza)
// })

// order food

// function datPizza(callback1){
//     console.log('khach dang chon pizza');

//     let done = 'khach da chon xong'

//     setTimeout(()=>{
//         callback1(done);
//     },2000);
// }

// function isPizzaDone(callback){
//     let pizza = 'pizza hai san';
//     console.log('nhan duoc order cua khach');

//     setTimeout(()=>{
//             callback(pizza);

//     },2000);
// }

// function contact(callback){
//     let phone = 123456789;
//     console.log('dang goi cho');
//     callback(phone);
//        setTimeout(() =>{
//         console.log('dang giao hang ');
//          setTimeout(() =>{
//         console.log('giao hang thanh cong ')
//         },2000)

//     },2000)

// }
// datPizza((abc)=>{
//         console.log( abc);
//         setTimeout(() =>{isPizzaDone((pizza) =>{
//             console.log(pizza);
//             setTimeout(() =>{contact((phone) =>{
//             console.log(phone);
//          })},2000)
//         })},2000)

// })

/* Promise */

function datPizza1(ms) {
  console.log('khach dang chon pizza');
  const v = false;

  return new Promise((resolve, reject) => {
    if (v) {
      setTimeout(() => {
        resolve('khach da chon xong');
      }, ms);
    } else {
      setTimeout(() => {
        reject(new Error('khach da chua chon xong'));
      }, ms);
    }
  });
}

function isPizzaDone1(ms) {
  console.log('nhan duoc order cua khach');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('pizza hai san');
    }, ms);
  });
}

function contact1(ms) {
  console.log('dang goi cho');

  return new Promise((resolve) => {
    resolve('01253468');

    setTimeout(() => {
      console.log('dang giao hang');
      setTimeout(() => {
        console.log('giao hang thanh cong');
      }, ms);
    }, ms);
  });
}

datPizza1(2000)
  .then((a) => {
    console.log(a);

    return isPizzaDone1(2000);
  })
  .catch((a) => {
    throw a;
  })
  .then((b) => {
    console.log(b);
    return contact1(2000);
  })
  .then((phone) => {
    console.log(phone);
  });

// const myArr =[1,2,3,4,5,6,7]

// let count = 0;
// const myArr2 = {
//     [Symbol.iterator](){
//       return {
//         next(){
//           if(count <myArr.length){
//             return{
//               value: myArr[count++], done: false
//             }
//           }else{
//             return{
//               value: undefined, done: true
//             }
//           }
//         }
//       }
//     }
// }
// for(let i of myArr2){
//   console.log(i)
// }

/** Promise  */

function oNha() {
  const oNha = true;
  return new Promise((resolve, reject) => {
    if (oNha) {
      resolve('Se Di Tang Qua');
    } else {
      reject('Khong Di Duoc');
    }
  });
}
function tangQua() {
  return new Promise((resolve) => {
    resolve('Da Tang Qua');
  });
}
function hangDaDenChua() {
  const hang = true;
  return new Promise((resolve, reject) => {
    if (hang) {
      resolve('Hang Da Den');
    } else {
      reject('Hang Chua Den');
    }
  });
}

hangDaDenChua()
  .then((result) => {
    console.log(result);
    return oNha();
  })
  .catch((error) => {
    throw error;
  })
  .then((result) => {
    console.log(result);
    return tangQua();
  })
  .catch((error) => {
    throw error;
  })
  .then((result) => {
    console.log(result);
  });
