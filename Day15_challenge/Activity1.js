
// Task 1

const outerfunction=()=>{
    const value=77;
    return innerfunction=()=>{
        console.log(value*value);
    }
}

const inner=outerfunction();
inner();

// Task 2


const counter=()=>{
    let count=0;
    return {
        increment:()=>{
            count++;
        },
        countValue:()=>{
            console.log(count);
        }
    }
}

const val=counter()
val.increment()
val.increment()
val.increment();
val.countValue();
