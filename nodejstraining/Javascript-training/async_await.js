// Async and await help you write async code like sync code

// can await a function which returns promise
console.log('Before');
async function displayModules(){
    const c = await getCourse(1);
    const modules = await getCourseModules(c);
    console.log(c);
    console.log(modules);
}
displayModules();
console.log('After');
function getCourse(id){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log('calling Timeout');
    resolve({id:id,name:'JavaScript'});
}, 2000); 
    })   
}

function getCourseModules(course){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Get Course Modules');
        resolve(['module1','module2','module3'])
    },2000);
    })
}