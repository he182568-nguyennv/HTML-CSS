// Get
const url = 'https://68ff4b63e02b16d1753d5203.mockapi.io/api/nguyen/users';
// async function getData() {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(`Response status: ${res.status}`);
//     }
//     const rs = await res.json();
//     console.log(rs);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// getData();

// Post
const urlParam = new URLSearchParams();
urlParam.append('name', 'nguyen');
async function postData() {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        credentials: 'include',
      },
      body: urlParam,
    });
    if (!res.ok) {
      throw new Error('Error: ', `${res.status}`);
    }
    console.log(res.status, res.statusText);
    const rs = await res.json();
    console.log(rs);
  } catch (error) {
    throw new Error(error.message);
  }
}
postData();

// PUT
// const urlParam1 = new URLSearchParams();
// urlParam1.append = { id: 1, name: 'nguyen' };
// async function putData() {
//   try {
//     const res = await fetch(url, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: urlParam1,
//     });
//     if (!res.ok) {
//       throw new Error('Error: ', `${res.status}`);
//     }
//     console.log(res.status, res.statusText);
//     const rs = await res.json();
//     console.log(rs);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }
// putData();

// DELETE
// async function deleteData() {
//   try {
//     const res = await fetch(url, {
//       method: 'DELETE',
//     });
//     console.log(res.status, res.statusText);
//     if (!res.ok) {
//       throw new Error(res.status, res.statusText);
//     }
//     const rs = await res.json();
//     console.log(rs);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }
// deleteData();
