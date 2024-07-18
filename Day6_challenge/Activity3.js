//Task 7

my_arr=[1,2,3,4,5,6]
console.log(my_arr);
new_arr=[]
my_arr.map((num)=>new_arr.push(num*2))
console.log(new_arr);

//Task 8
const even_arr=my_arr.filter(num=>num%2==0)
console.log(even_arr);

//Task 9
const intial=0
const total=my_arr.reduce((acc,curr)=>acc+curr,intial)
console.log(total);