// async function getData() {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=5";
//   try {
//     const response = await fetch(url,{
//         method: 'GET',
//         mode: 'cors',
//         body: JSON.stringify({username: 'nguyen'}),
//         credentials: "include",
//         headers: {
//             "Content-type": "application/json",
//         }
//     });
//     if (!response.ok) {  // check status HTTP
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {  // check internet error
//     console.error(error.message);
//   }
// }

// async function getData() {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=5";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const result = await response.json();
//     console.log(result)

//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getData();

const req = new Request('https://pokeapi.co/api/v2/pokemon?limit=5', {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-type': 'application/json',
  },
});

async function getData() {
  try {
    const res = await fetch(req);
    if (!res.ok) {
      throw new Error(`Response code : ${res.status}`);
    }
    res.headers.append('Content-type', 'application/json');
    res.headers.get('Content-type');

    const rs = await res.json();
    console.log(rs);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
