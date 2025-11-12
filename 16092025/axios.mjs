import axios from 'axios'


const app = axios.create();


async function getUser() {
    try {
        const response = await app.get('https://pokeapi.co/api/v2/pokemon?limit=5'
        );
        console.log(response.data);
        console.log(response.status)
    } catch (error) {




        console.log(error.message)
        console.log(error.name);
        console.log(error.stack);
        console.log(error.code)
    }
}
getUser();