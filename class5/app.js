'use strict';
var n1=10;
var n2=20;
var sum=n1+n2;
console.log("sum of numbers",sum);


var name="jafar";
var name2='t';
var allnames=name+" "+name2;

console.log("all names",allnames)
const oneConstantVar=5;


//popup box
//1-alert
alert("welcome");


//2-prompt
var promptResult=prompt("enter your name")

//3-confirm box
var confirmResult=confirm("are you sure",promptResult);



//if statment
if(name == "jafar"){
    console.log("this is jafar");
}else if(name == jafarrr){
    console.log("the name is jafarrr")
}

//switch
let dayOfweek=4;

switch(dayOfweek){
    case 1: console.log("mon");
    break;
    case 2: console.log("tuesday");
    break;
    case 3: console.log("wed");
    break;
    case 4: console.log("thur");
    break;
    case 5: console.log("fri");
    break;
    case 6: console.log("sat");
    break;
    case 7: console.log("sun");
    break;
}

//object
let myobj={first:"123",second:456,third:true}
myobj.first;
myobj["first"];