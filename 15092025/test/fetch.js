const controller2 = new AbortController();

const signal2 = controller2.signal;

async function getData() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=5';
  try {
    const response = await fetch(url, { signal: signal2 });
    if (!response.ok) {
      // check status HTTP
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    // check internet error
    console.error('nguyen', error.message);
  }
}

controller2.abort();

getData();

// console.log(signal) // => in ra AbortSignal { aborted: true }
// if (signal.aborted) {
//   console.log("Request has been aborted");
// } else {
//   console.log("Request not aborted");
// }

// const a = AbortSignal.any([signal,signal2]);
// console.log(a)

// if (signal.aborted) {
//   if (signal.reason) {
//     console.log(`Request aborted with reason: ${signal.reason}`);
//   } else {
//     console.log("Request aborted but no reason was given.");
//   }
// } else {
//   console.log("Request not aborted");
// }

/** AbortController & AbortSignal */

// const controller = new AbortController();
// const signal = controller.signal
// console.log(signal) // => in ra AbortSignal { aborted: false }
