// Task 9
function high(func,repeat){
    return function()
    {
        for(let i=0;i<repeat;i++)
        {
            func(i);
        }
    }
}

function print(i){
    console.log(i);
}
const printrepeat=high(print,7);
printrepeat()

//Task 10

function intake(one,two,value){
     console.log(two(one(value)));
}

function one(x){
    return x+7;
}

function two(x){
    return x*x;
}
intake(one,two,7)


