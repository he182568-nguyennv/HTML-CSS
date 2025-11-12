/** Call API by XMLHttpRequest */

// const getListPokemon = (apiEndPoint, callback)=>{
//     const requestAPI = new XMLHttpRequest();
//     requestAPI.open('GET', apiEndPoint);
//     requestAPI.onload =()=>{
//         if(requestAPI.status >=200 && requestAPI.status <= 299){
//             const responseData = JSON.parse(requestAPI.responseText);
//             callback(responseData);
//         }
//     }
//     requestAPI.send();
// }

// const getPokemonDetail = (apiEndPoint, callback)=>{
//     const requestAPI = new XMLHttpRequest();
//     requestAPI.open('GET', apiEndPoint);
//     requestAPI.onload =()=>{
//         if(requestAPI.status >=200 && requestAPI.status <= 299){
//             const responseData = JSON.parse(requestAPI.responseText);
//             callback(responseData);
//         }
//     }
//     requestAPI.send();
// }

// getListPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (responseData)=>{
//     console.log('responseData: ', responseData);
//     document.getElementById('list-pokemon').innerHTML = responseData.results.map((pokemon) => `<li>${pokemon.name}</li> <li><a href ='${pokemon.url}'>${pokemon.url}</a></li>`).join('')
//     const charmander = responseData.results.find(pokemon => pokemon.name === 'charmander')
//     if(charmander){
//         getPokemonDetail(charmander.url,(charmanderDetail) =>{
//             console.log(charmanderDetail);

//         })
//     }
// })

/** Call API by fetch */

const testPromise = new Promise((resolve, reject) => {
  const callApiSuccess = true;
  setTimeout(() => {
    if (callApiSuccess) {
      resolve('successful');
    } else {
      reject('fail');
    }
  }, 2000);
});

// console.log(testPromise); // (<pending>)

// testPromise
//     .then(rs => {
//         console.log(rs); //(<fulfilled>)
//     })
//     .catch(err => {
//         console.error(err); // (<rejected>)
//     })
//     .finally(() => {
//         console.log('Done!')
//     })

// const getListPokemonPromise = (limit = 10) => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {method: 'GET'})
//     .then(rawRes =>{
//             rawRes.json()
//             .then(pokemon => {
//                 console.log('List of Pokemon: ', pokemon);
//             })
//     })
//     .catch(err => {
//         console.log('error: ', err);
//     })
//     .finally(()=>{
//         console.log('Done!');
//     })
// }
// getListPokemonPromise(10);

const handleAsyncFunc = async () => {
  try {
    const rs = await testPromise;
    console.log(rs);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('All Done!');
  }
};

handleAsyncFunc();

const getListPokemonAsync = async (limit = 10) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
      { method: 'GET' },
    );
    const pokemon = await res.json();
    console.log(pokemon);
  } catch (error) {
    console.log(error);
  }
};

getListPokemonAsync(5);
