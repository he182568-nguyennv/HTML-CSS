import axios from 'axios';

const app = axios.create();

// console.log(app.defaults);
// console.log('------------')

// app.interceptors.response.use(
//   (response) => {
//     const { data, status, statusText } = response;
//     return {
//       data,
//       status,
//       statusText
//     }
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// )

// async function getUser() {
//   try {
//     const response = await app.get('https://pokeapi.co/api/v2/pokemon?limit=5');
//     console.log(response.data);
//   } catch (error) {
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
//     console.log(error.code);
//   }
// }
// getUser();

// console.log(getUser());
// const urlParam = new URLSearchParams();
// urlParam.append('name', 'nguyen');
// async function postUsers() {
//   try {
//     const res = await axios.post(
//       'https://68ff4b63e02b16d1753d5203.mockapi.io/api/nguyen/users',
//       urlParam,
//     );
//     console.log(res.data);
//     console.log(res.status);
//   } catch (error) {
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
//     console.log(error.code);
//   }
// }

// postUsers();

// PUT
// const urlParam1 = new URLSearchParams();
// urlParam1.append('avatar', 'aaaaa');
// async function putUsers() {
//   try {
//     const res = await axios.put(
//       'https://68ff4b63e02b16d1753d5203.mockapi.io/api/nguyen/users/1',
//       urlParam1,
//     );
//     console.log(res.data);
//     console.log(res.status);
//   } catch (error) {
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
//     console.log(error.code);
//   }
// }

// putUsers();

// DELETE
async function deleteUsers() {
  try {
    const res = await axios.delete(
      'https://68ff4b63e02b16d1753d5203.mockapi.io/api/nguyen/users/1',
    );
    console.log(res.status);
    console.log(res.data);
  } catch (error) {
    console.error(error.message);
  }
}

deleteUsers();
