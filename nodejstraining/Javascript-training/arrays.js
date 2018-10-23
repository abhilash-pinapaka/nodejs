/*
Arrays
Adding new elements
Finding elements
Removing Elements
Spliting arrays
Combining arrays
*/

// Adding elements

const numbers = [3,4];
numbers.splice()
// Add new elements to the end, beginning or middle of arrays
numbers.push(5,6) //can pass one or more args, push to add elements to the end of array
console.log(numbers)

// Beginning
numbers.unshift(1,2)
console.log(numbers)

// Middle
numbers.splice()
numbers.splice(3,0,'a','b')
console.log(numbers)

// Finding elements

// primitive types
const num = [1,2,1,3,1,4];
console.log(num.indexOf('a')) //return -1 if does exist
console.log(num.indexOf(1)) // return index
console.log(num.indexOf(1,1))
console.log(num.lastIndexOf(1))
console.log(num.indexOf(1) !== -1);
console.log(num.includes(1));

// Reference Types
const courses = [
    {id : 1, name : "node"},
    {id : 2, name : "js"}
]
console.log(courses.includes({id : 1, name : "node"}))
const course = courses.find(function(course){
    return course.name === 'node'
})
let c = courses.find((course)=>{return course.name ==='node'})
console.log(course);

const courseIndex = courses.findIndex(function(course){
    return course.name === 'node'
})
console.log(courseIndex);

// Arrow function or Fat arrow
const cour = courses.find(course => course.name === 'node');
console.log(cour)

// Removing elements
const numbrs = [1,2,3,4,5,6]
let last = numbrs.pop();
console.log(numbrs);
console.log(last);
let first =numbrs.shift();
console.log(first);
console.log(numbrs);

numbrs.splice(2,3);
console.log(numbrs);

// Emptying an array
let n = [1,2,3,4];
n = [];
console.log(n);
n.length = 0;
while(n.length > 0){
    n.pop();
}

// combining/Slice arrays
const first1 = [1,2,3];
const second = [4,5,6];
const combined = first1.concat(second);
console.log(combined)

// slice
console.log(combined.slice(2));
console.log(combined.slice());

// Spread operator
const combin = [...first1,...second];
[1,2,3,4,5,6]
// const combin = [...first1,'a',...second,'c'];

// iterating an array
// for .. of
// for .. in
// foreach 
const nums = [1,2,3,4];
nums.forEach(function(num){return console.log(n*2)})
nums.forEach(num => console.log(num*2));
nums.forEach((num,index) => console.log(num*2,index));

// Joining array
const joined = nums.join('-');
console.log(joined);

// Sorting arrays
const sort_nums = [2,3,1];
sort_nums.sort();
console.log(sort_nums);
sort_nums.reverse();
console.log(sort_nums);

// sorting objects
console.log(courses);
courses.sort(function(a,b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

})
let courses = [
    
    {id : 2, name : "js"},
    {id : 1, name : "node"},
    {id : 3, name : "cat"}
     ]

// filter
const fil_nums = [1,-1,2,3];
const filtered = fil_nums.filter(function(value){
    return value >=0;
})
console.log(filtered);

// Mapping an array

const map_arr = filtered.map(function(n){
    return {value:n}
})
console.log(map_arr);

// chaining methods
const arr  = fil_nums.filter(n => n > 0).map(n => ({value:n}));
console.log(arr)

// reducing an array

let numbers1 = [1,2,3,4,5];
sum = numbers1.reduce(function(accumulator,currentValue){
    return accumulator+currentValue
},0)
console.log(sum)
 sum = numbers1.reduce((a,v) => a+v)
 