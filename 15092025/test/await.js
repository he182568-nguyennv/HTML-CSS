function tangLuongCham(a, b) {
  const thanhTichXuatSac = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (thanhTichXuatSac) {
        resolve(a + b);
      } else {
        reject(new Error('Thanh tich xuat sac nhat thang'));
      }
    }, 3000);
  });
}

const nguyenakfje = 11;
async function tangLuong(base, incre) {
  let newSalary;
  try {
    const start = performance.now();
    newSalary = await tangLuongCham(base, incre);
    const end = performance.now();
    console.log(`time: ${(end - start).toPrecision(5)}ms`);
  } catch (error) {
    console.error(`Tang luong gap: ${error.message}`);
    newSalary = base * 2;
  }
  console.log(`new Salary: ${newSalary}`);
  return newSalary;
}
tangLuong(1000, 200);
