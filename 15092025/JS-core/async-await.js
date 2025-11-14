function oNha() {
  const oNha = true;
  return new Promise((resolve, reject) => {
    if (oNha) {
      setTimeout(() => {
        resolve('Se Di Tang Qua');
      }, 200);
    } else {
      setTimeout(() => {
        reject(new Error('Khong di duoc'));
      }, 2000);
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
      setTimeout(() => {
        resolve('Hang Da Den');
      }, 100);
    } else {
      setTimeout(() => {
        reject(new Error('hang chua den'));
      }, 2000);
    }
  });
}

async function chuongTrinhTangQua() {
  try {
    const start = performance.now();
    const _hang = hangDaDenChua();
    const hang = await _hang;
    console.log(hang);
    const _nha = oNha();
    const nha = await _nha;
    console.log(nha);
    const _tang = tangQua();
    const tang = await _tang;
    console.log(tang);
    const end = performance.now();
    console.log(`time: ${(end - start).toFixed(2)}ms`);
  } catch (error) {
    console.error(error.message);
  }
}
chuongTrinhTangQua();

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
