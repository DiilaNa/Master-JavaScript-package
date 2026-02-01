// Javascript is syncronus/ Single Threaded - blocking execution

// Asynchronus
// 1. Promises
// 2. await/async


// ------------Promises ----------
const display = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Hello promise"), 3000),
);

//display.then(message => console.log(message));

//------------- await/async-------------------

async function showMessage() {
    const display = new Promise((resolve, reject) =>
      setTimeout(() => resolve("Hello async"), 3000),
    );
    const result = await display;
    console.log(result);
}

//showMessage()

//------ Promise all---------------------
// for time consuming tasks
// wait untill every tasks are completed, then show the result at the end 

const image1 = new Promise(resolve => setTimeout(() => resolve("Image 1 is uploaded"),2000))
const image2 = new Promise(resolve => setTimeout(() => resolve("Image 2 is uploaded"),4000))
const image3 = new Promise(resolve => setTimeout(() => resolve("Image 3 is uploaded"),6000))

Promise.all([image1,image2,image3]).then(response => console.log(response));

//------ Promise race---------------------
// return who finish first others are ignored / like a race

const image4 = new Promise(resolve => setTimeout(() => resolve("Image 4 is uploaded"),2000))
const image5 = new Promise(resolve => setTimeout(() => resolve("Image 5 is uploaded"),4000))
const image6 = new Promise(resolve => setTimeout(() => resolve("Image 6 is uploaded"),6000))

Promise.race([image4,image5,image6]).then(response => console.log(response));