/** Callback */
// function oNha1(callback){
//     let oNha = false;
//     if(oNha){
//         setTimeout(()=>{
//                 callback(null,'Se Di Tang Qua');
//         },2000)
//     }else{
//         setTimeout(()=>{
// callback(new Error('Khong di duoc'), null)
//         })

//     }
// }

// function tangQua1(callback){
//     callback('Da tang Qua');
// }

// function hangDaDenChua1(callback){
//     let hang = true;
//     if(hang){
//         setTimeout(()=>{
//             callback(null,'Hang Da Den')
//         },2000);
//     }else{
//         setTimeout(()=>{
//             callback(new Error('Hang chua den'), null)
//         },2000)

//     }
// }

// hangDaDenChua1((err, a)=>{
//     if(err){
//         console.error(err.message);
//         console.log('Chua di tang qua duoc')
//         return;
//     }
//     console.log(a);
//     oNha1((error,result)=>{
//         if(error){
//             console.error(error.message);
//             console.log('De hom khac')
//             return;
//         }
//             console.log(result);
//             setTimeout(()=>{
//                 tangQua1((finalResult)=>{
//                 console.log(finalResult);
//             })
//             },2000)
//     })
//    }
// )

/** Promise  */
function oNha() {
  const oNha = false;
  return new Promise((resolve, reject) => {
    if (oNha) {
      setTimeout(() => {
        resolve('Se Di Tang Qua');
      }, 1000);
    } else {
      setTimeout(() => {
        reject(new Error('Khong di duoc'));
      }, 2000);
    }
  });
}
function tangQua() {
  return new Promise((resolve, reject) => {
    resolve('Da Tang Qua');
  });
}
function hangDaDenChua() {
  const hang = true;
  return new Promise((resolve, reject) => {
    if (hang) {
      setTimeout(() => {
        resolve('Hang Da Den');
      }, 3000);
    } else {
      setTimeout(() => {
        reject(new Error('hang chua den'));
      }, 2000);
    }
  });
}

//  hangDaDenChua()
// .then((result) =>{
//     console.log(result);
//     return oNha();
// })
// .catch((error)=>{
//     throw error;
// })
// .then((result) =>{
//     console.log(result);
//     return tangQua();
// })
// .catch((error)=>{
//     throw error;
// })
// .then((result)=>{
//     console.log(result);
// })

const handleError = (Promise) =>
  Promise.then((result) => [undefined, result]).catch((error) => [
    error,
    undefined,
  ]);

async function validation() {
  let error;
  let result;
  [error, result] = await handleError(hangDaDenChua());
  if (error) {
    console.error('error: ', error.message);
    return;
  }
  console.log(result);

  [error, result] = await handleError(oNha());
  if (error) {
    console.error('error: ', error.message);
    return;
  }
  console.log(result);

  const a = await tangQua();
  console.log(a);
}
validation();

/** async/await */

// async function chuongTrinhTangQua() {
//     try {
//         const start =performance.now();
//         const _hang =  hangDaDenChua();
//         const hang = await _hang;
//         console.log(hang);
//         const _nha =  oNha();
//         const nha = await _nha;
//         console.log(nha);
//         const _tang =  tangQua();
//         const tang = await _tang;
//         console.log(tang);
//         const end = performance.now();
//     console.log(`time: ${(end - start).toFixed(2)}ms`);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// chuongTrinhTangQua();

/** Event loop */

/**
 * Event loop : sẽ thực thi mã tổng thể trước ( trong call stack), Nếu trong call stack rỗng thì sẽ ưu tiên thực thi micro-task,
 * sau  khi thực hiện xong các mirco-task thì marco task sẽ được thực thi
 *
 */

// setTimeout(() => {          // marco-task (task queue)
//     console.log('1');
// })

// new Promise((resolve, reject) => {  // micro-task (job queue)
//     console.log('2');
//     resolve(3);
// }).then((value) => {
//     console.log(value)
// });

// console.log('4');
