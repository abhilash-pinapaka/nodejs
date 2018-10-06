// if..else

if(condition){
    // statement
}else if(condition){
    // statement
}else{
    // statement
}

let hour = 10;

if (hour >= 6 && hour <=12){
    console.log('Good morning');
}else if (hour >= 12 && hour <=18){
    console.log('Good afternoon');
}

// Switch and case

let role;
switch (role) {
    case 'guest':
        console.log('GUest user');
        break;
    
    case 'admin':
        console.log('Admin user');
        break;
    default:
        console.log('unknow user');
}

// for loop
for (let i = 0; i < 5; i++){
    console.log('Hello');
}

// while loop
let i = 0;
while (i < 5){
    console.log('Hello');
    i +=1;
}
// do while
let i =0;
do{
    console.log("hello");
    i++;
}while(i<=5)

// infinite loops
// let i = 0;
// while(i<5){
//     console.log("hello");
// }

// for .. in
const course = {
    courseName : "Node",
    courseLength : 30
};

for (key in course){
    console.log(key);
}

const colors = ['red','blue','white'];
for (index in colors){
    console.log(index,colors[index]);
}

// for .. of
for (let color of colors){
    console.log(color);
}

