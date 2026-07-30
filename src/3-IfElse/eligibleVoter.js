/** Write a program to check if a person is eligible to vote or not. */

function checkAge(age) {
    if(age <= 0){
        return "Invalid Age";
    }
    else if(age >= 18){
        return "Eligible Voter";
    }
    return "Ineligible Voter";
}

let x;
x = checkAge(10);
console.log(x);
x = checkAge(25);
console.log(x);