let userName = prompt("Please enter your name:");
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