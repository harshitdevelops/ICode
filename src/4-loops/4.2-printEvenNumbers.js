/**Write a loop which prints all the even numbers of an array */

const arr = [3, 2, 6, 5, 8, 5, 30];
const length = arr.length;

let res = [];
for(let i = 0; i < length; i++){
    if(arr[i] % 2 === 0){
        res.push(arr[i]);
    }
}
console.log("Even Numbers: ", res);