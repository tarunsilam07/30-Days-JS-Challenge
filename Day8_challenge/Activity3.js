//Task 5

let intial=[1,2,3,4,5,6]

let add=[7,8,9,10]

let new_array=[...intial,...add]
console.log(new_array);

//Task 6

let sum=(...nums)=>{
    return nums.reduce((acc,curr)=>acc+curr,0);
}

console.log(sum(7,37,77));
console.log(sum(1,2,3));