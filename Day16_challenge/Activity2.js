// Task 3

function add(arr=[],size,n,sum=0){
    if(n==size)
        return sum;
    sum+=arr[n];
    return add(arr,size,n+1,sum);
}
my_arr=[1,2,3,4,5]


const sum=add(my_arr,my_arr.length,0)
console.log(`The sum of the array is ${sum}`);

// Task 4

function large(arr=[],size,n,max=0){
    if(n==size)
        return max;
    if(arr[n]>max)
        max=arr[n];
    return large(arr,size,n+1,max)
}

const arr=[21,37,88,1,90]
const max=large(arr,arr.length,0,0);
console.log(`The largest number in the array is ${max}`);

