//Task 7

const product=(num1,num2=7)=>{
     console.log("the product is ",num1*num2);
}

product(9)
product(7,3)

//Task 8
const greet=(name,age=20)=>{
    console.log(`Hello ${name}, your age is ${age}`);
}

greet("tarun")
greet("dhoni",19)
