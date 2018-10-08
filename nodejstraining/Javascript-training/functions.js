// function declaration
function walk(){
    console.log('walk');
}
// function expression
// Named
let run = function move(){
    console.log('run');
}
// anonymous function
let move = function(){
    console.log('run');
};

// Hoisting

// Arguments
function sum(a,b){
   console.log(arguments)
    return a+b;
}
console.log(sum(1))
// 
function sum(){
    let total = 0;
    for (val of arguments){
        total += val;
    }
    return total;
}

// Default parameters

function interest(principal,rate,years){
    rate = rate || 3.5;
    years = years || 5;
    return principal*rate/100 * years;
}

interest(10000,6,4);

// try .. catch
function words(sentence){
    return sentence.split(' ')
}

function words(sentence){
    if (typeof(sentence) !== 'string')
        throw new Error('value is not a string')
    return sentence.split(' ')
}

try{
    console.log(words(1));
}catch(e){
    // console.log("Error")
    console.log(e);
}

// Scope - Local vs Global
function fn(){
    for (let i = 0; i < 2 ; i++)
        console.log(i)
    let message = "Hello";
    var new_msg = "New Msg";
    console.log(i)
    console.log(message);
    console.log(new_msg);
}

function person(a,b){
    console.log(this,a,b)
}
person.call({name:'Mark'},1,2)
person.apply({name:'Mark'},[1,2])
person.bind({name:'Mark'})