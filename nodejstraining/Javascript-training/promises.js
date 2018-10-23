// promise holds the eventual result of an asynchronous operation
// Pending ------- Fulfilled/Rejected
const p = new Promise((resolve,reject)=>{
    // Aysnc work
   setTimeout(() =>{
    resolve(1);
    // reject(new Error('msg'));
   },2000)
})

p
 .then((result) => console.log(result))
 .catch((err)=>console.log('Error',err.message))