
// Task 3

const unique=()=>{
    let prev=0;
    let id=0;
    return{
        gen_id:()=>{
            prev=id
            id=(Math.round(Math.random()*1000));
            return id;
        },
        pre_id:()=>{
            return prev;
        }
    }
}

const gen=unique();
console.log("first call ",gen.gen_id());
console.log("Prev id ",gen.pre_id());
console.log("Second call ",gen.gen_id());
console.log("Prev id ",gen.pre_id());
console.log("Third Call ",gen.gen_id());
console.log("Prev id ",gen.pre_id());


// Task 4

const user=(username)=>{
    return function(){
        return `Hello ${username} and Welcome Back !!` ;
    };
    }

const greeting=user("Tarun");
console.log(greeting());




