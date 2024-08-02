
// Task 7 

class Person {
    constructor(firstname,lastname,age) {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullname(name){
        const[firstname,lastname]=name.split('.')
        this.firstname=firstname;
        this.lastname=lastname;
    }
}

const name=new Person("Tarun","Silam",20)
console.log(name.fullname);

// Task 8

name.fullname="Tarun.Silam"
console.log(name.fullname);

