/* let userName = prompt("Please enter your name:");
let userGender = prompt("Please enter your gender (male or female):");

let userAge = prompt("Please enter your age:");
if(userAge<=0){
    alert("your age is less than 0");
}


let skipWelcome = confirm("Do you want to skip the welcoming message?");

if (!skipWelcome) {
    if(userGender === 'male'){
   alert("Welcome mr " + userName );

}else if(userGender === 'female'){
    alert("Welcome ms " + userName );
}else{
    alert("wrong");
}
}

 */



/*=========adding the 3 questions==================================================*/

 'use strict'
var answers = [];
let answer;
function qustionsPopUp() {
    let arrayOfQuestions = ["Do you like swimming ", "Do you like archery", "Do you like horse riding"];
    for (let i = 0; i < arrayOfQuestions.length; i++) {
        answer = prompt(arrayOfQuestions[i]);
        while(!answer) {
            if (!answer) {
                alert("invalid");
            }
            answer = prompt(arrayOfQuestions[i]);
        }
        answers.push(answer);
    }
    return answers;
} 

qustionsPopUp();
console.log("final answers : " + answers); 




