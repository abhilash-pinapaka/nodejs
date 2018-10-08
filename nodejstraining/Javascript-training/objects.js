

// circle object
let radius = 1;
let x = 1;
let y = 1;

const circle = {
    radius : 1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log("Draw");
    }
}
// group related variables

// Object Oriented Programming
// OOP is a style of prog where the prog is a collection of objects that talk to each other to perform some functionality


// Factory functions
function createCircle(radius){
return {
    radius,
  draw:function(){
 console.log('draw');
}
}

}
function createCircle(radius,loc){
    
return {
    radius : radius,
    location:loc,
    isVisible:true,
    draw:function(){
        console.log("Draw");
    }
}
}

function createCircle(radius){
    
    return {
        radius,
        draw(){
            console.log("Draw");
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

// constructor function
// pascal notation OneTwoThree

function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log("draw");
    }
}
const circle = new Circle(1)
// creates empty js object let x = {}
// set this to point empty object
// and set radius porperty and draw method in new object
// returns the object

// Dynamic nature

circle.color = "red";
circle.draw = function(){}
delete circle.color

console.log(circle);

// constructor property

