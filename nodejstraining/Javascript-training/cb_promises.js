console.log('Before');
// getCourse(1),function(course){
//     console.log('user:',course);
//     getCourseModules(course,function(modules){
//         console.log(modules);
//     })
// // });
// const p = getCourse(1);
// p
//  .then(course=>getCourseModules(course))
//  .then(modules=>console.log(modules))
// console.log('after');

const p = getCourse(1);

p
 .then((course)=>getCourseModules(course))
 .then((Modules)=>{console.log(Modules)})
 .catch((err)=>{console.log(err)})

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
        // resolve(['module1','module2','module3'])
        reject(new Error('Msg'))
    },2000);
    })
}
