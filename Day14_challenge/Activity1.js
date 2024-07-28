
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return `Welcome back ${this.name} and I hope you are doing good at your age : ${this.age}`
    }
    update(new_age){
        this.age=new_age;
        console.log(`The new age is ${this.age}`);
    }
}

// Task 1
const user=new Person("Tarun",20)
console.log(user.greet());

// Task 2

user.update(19);
