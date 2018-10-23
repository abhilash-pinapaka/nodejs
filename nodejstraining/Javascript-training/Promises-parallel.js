const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async Operation 1...');
        resolve(1);
        // reject(new Error('msg'))
    },2000)
});

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async Operation 2...');
        resolve(2);
    },2000)
});

Promise.race([p1,p2])
    .then(result=>console.log(result))
    .catch(err=>console.log(err))

// Single thread is kicking of multiple async operation
