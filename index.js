// let number = 5;

// number++; //=> 5... hmmmm

// number; //=> 6 -- the number was incremented after it was evaluated

// number--; //=> 6

// number; //=> 5

// --number; //=> 4

// number; //=> 4

// ++number; //=> 5

// number; //=> 5

let number = 5;

function add(){
    return (number += 5);
}

function subtract(){
    return (number -= 2); //=> 6
}

function multiply(){
    return (number *= 10); //=> 60
}

function divide(){
    return (number /= 5); //=> 12
}

function add(a, b){
    return (a+b);
}

function subtract(a, b){
    return (a-b);
}

function multiply(a, b){
    return (a*b);
}
 
function divide(a, b){
    return (a/b);
}

function increment(n){
    return (++n);
}

function decrement(n){
    return (--n);
}

function makeInt(n){
   return parseInt(n, 10);
}

function preserveDecimal(n){
    return parseFloat(n);
}