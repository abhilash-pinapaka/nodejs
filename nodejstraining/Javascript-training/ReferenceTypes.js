// Reference Types

// Objects, Arrays and functions
// object 

let courseName = "JavaScript";
let courseLength =30;

let course = {
    courseName : 'JavaScript',
    courseLength : 30
}

// Arrays
let colors = ['red','blue'];
colors[2] = 'White';
colors[3] = 3;
console.log(colors)
// Array is an object, everytime array is declared using [] will automatically receive properties ...->protypes

console.log(colors.length);
// Array is a data structure used to display a list of items

// Functions

function sayHello(){
    let name = "javascript";
    console.log('Hello World');
    return name;
}

sayHello();

function Hello(name){
    console.log('Hello' + name);
    return name;
}

Hello('Abhi');
// name is parameter, Abhi is argument
// paramter is that we have at the time of declaration
// Argument is the actual value we supply to parameter.

