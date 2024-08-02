
// Task 7

function Binary(arr=[],low,high,target){
    if(low>high)
        return -1;
    const mid=Math.floor((low+high)/2);
    if(arr[mid]==target)
        return mid;
    if(arr[mid]>target)
        return Binary(arr,low,mid-1,target)
    else if(arr[mid]<target)
        return Binary(arr,mid+1,high,target)
   
}

my_arr=[1,2,3,5,7,8,10,13]
const index=Binary(my_arr,0,(my_arr.length)-1,1);
console.log(index);

// Task 8

function occur(arr,size,target,n,count=0){
    if(n==size)
        return count;
    if(arr[n]==target)
        count++;
    return occur(arr,size,target,n+1,count);
}
const arr=[1,2,3,7,8,7,9,7]
const cnt=occur(arr,arr.length,7,0);
console.log(cnt);

