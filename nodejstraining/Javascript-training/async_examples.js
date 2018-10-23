// console.log('Before');
// console.log('Synchronous call')
// console.log('after');

// console.log('Before');
// setTimeout(()=>{console.log('calling Timeout')}, 2000);
// console.log('After');
// Dealing with Asynchronous calls
// console.log('Before')
// const course = getCourse(1);
// console.log(course)
// function getCourse(id){
//     setTimeout(()=>{console.log('calling Timeout');
//     return {id:id,name:'JavaScript'}
//     }, 2000);    
// }
// console.log('Before');
// const course = getCourse(1);
// console.log(course);
// function getCourse(id){
//     setTimeout(()=>{
//         console.log('calling Time Out');
//         return {id:id,name:'JavaScript'}
// },2000)
// }
// console.log('After');
// console.log('After')
// how to get user details?
// Callbacks, Promises, Async & Await

// a callback function is called when the result of async function is ready
// console.log('Before');
// getCourse(1,function(course){
//     console.log('user:',course);
//     getCourseModules(course,function(modules){
//         console.log(modules);
//     })
// });
// console.log('after');
console.log('Before')
getCourse(1,function(course){
    console.log('Course Callback Function');
    getCourseModules(course.name,function(modules){
        console.log(modules);
        console.log('Course Modules Call Back function');
    })
})
console.log('After');
function getCourse(id,callback){
    setTimeout(()=>{console.log('calling Timeout');
    callback({id:id,name:'JavaScript'});
}, 2000);    
}

function getCourseModules(course,callback){
    setTimeout(()=>{
        console.log('Get Course Modules');
        callback(['module1','module2','module3'])
    },2000);
}
