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
    static generic(){
        return `This is a default message `
    }
}
// Task 3
class Student extends Person{
    static count=0;
    constructor(name,age,student_id){
        super(name,age);
        this.student_id=student_id;
        Student.count++;
    }
    id(){
        return `The student id is ${this.student_id}`
    }
    greet(){
        return `Welcome back ${this.name} and I hope you are doing good at your age : ${this.age} and Your student id is ${this.student_id}`
    }
}

// Task 5
console.log(Person.generic());

// Task 6
const stud1=new Student("Tarun",20,77)
const stud2=new Student("Dhoni",19,7)
console.log(Student.count);


