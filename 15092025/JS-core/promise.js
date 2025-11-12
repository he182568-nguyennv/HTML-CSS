// Callback

function oNha1(callback) {
  const oNha = true;
  if (oNha) {
    setTimeout(() => {
      callback(null, 'Se Di Tang Qua');
    }, 2000);
  } else {
    setTimeout(() => {
      callback(new Error('Khong di duoc'), null);
    }, 2000);
  }
}

function tangQua1(callback) {
  callback('Da tang Qua');
}

function hangDaDenChua1(callback) {
  const hang = false;
  if (hang) {
    setTimeout(() => {
      callback(null, 'Hang Da Den');
    }, 2000);
  } else {
    setTimeout(() => {
      callback(new Error('Hang chua den'), null);
    }, 2000);
  }
}

hangDaDenChua1((err, a) => {
  if (err) {
    console.error(err.message);
    console.log('Chua di tang qua duoc');
    return;
  }
  console.log(a);
  oNha1((error, result) => {
    if (error) {
      console.error(error.message);
      console.log('De hom khac');
      return;
    }
    console.log(result);
    setTimeout(() => {
      tangQua1((finalResult) => {
        console.log(finalResult);
      });
    }, 2000);
  });
});

/** Promise  */
// function oNha() {
//   const oNha = true;
//   return new Promise((resolve, reject) => {
//     if (oNha) {
//       setTimeout(() => {
//         resolve('Se Di Tang Qua');
//       }, 200);
//     } else {
//       setTimeout(() => {
//         reject(new Error('Khong di duoc'));
//       }, 2000);
//     }
//   });
// }
// function tangQua() {
//   return new Promise((resolve) => {
//     resolve('Da Tang Qua');
//   });
// }

// function hangDaDenChua() {
//   const hang = true;
//   return new Promise((resolve, reject) => {
//     if (hang) {
//       setTimeout(() => {
//         resolve('Hang Da Den');
//       }, 100);
//     } else {
//       setTimeout(() => {
//         reject(new Error('hang chua den'));
//       }, 2000);
//     }
//   });
// }

// hangDaDenChua()
//   .then((result) => {
//     console.log(result);
//     return oNha();
//   })
//   .catch((error) => {
//     throw error;
//   })
//   .then((result) => {
//     console.log(result);
//     return tangQua();
//   })
//   .catch((error) => {
//     throw error;
//   })
//   .then((result) => {
//     console.log(result);
//   });

/** Promise.all() */
// Promise.all([
//   hangDaDenChua().catch((error) => error.message),
//   oNha().catch((err) => err),
//   tangQua(),
// ]).then((result) => {
//   console.log(result);
// });

// /** Promise.allSettled() */

// Promise.allSettled([hangDaDenChua(), oNha(), tangQua()]).then((result) => {
//   console.log(result);
// });

// /** Promise.race() */

// Promise.race([hangDaDenChua(), oNha(), tangQua()]).then((result) => {
//   console.log(result);
// });

// /** Promise.any() */

// Promise.any([hangDaDenChua(), oNha(), tangQua()]).then((result) => {
//   console.log(result);
// });
