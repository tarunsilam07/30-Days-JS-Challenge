
// Task 1
function factorial(num,fact){
    if(num==0){
       return fact;
    }
    fact=fact*num;
    return factorial(num-1,fact);
}

const value=factorial(5,1)
console.log(value);

// Task 2

function fib(n){
    if(n<=1)
        return n;
    return fib(n-1)+fib(n-2);
}
const tenth=fib(7)
console.log(tenth);


