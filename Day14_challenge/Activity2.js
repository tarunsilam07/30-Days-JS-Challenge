
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
// Task 3
class Student extends Person{
    constructor(name,age,student_id){
        super(name,age);
        this.student_id=student_id;
    }
    id(){
        return `The student id is ${this.student_id}`
    }
    greet(){
        return `Welcome back ${this.name} and I hope you are doing good at your age : ${this.age} and Your student id is ${this.student_id}`
    }
}

const stud=new Student("Tarun",20,77)
console.log(stud.id());

// Task 4

console.log(stud.greet());