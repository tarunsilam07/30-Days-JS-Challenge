
// Linear Search 

function LinearSearch(arr=[],target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target)
            return i;
    }
    return -1;
}
const arr=[2,9,7,4,0,7];
console.log(LinearSearch(arr,7));

// Binary Search
 function BinarySearch(arr,target){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]>target){
            high=mid-1;
        }
        else
            low=mid+1;
    }
    return -1;
 }

 my_arr=[1,2,4,7,8,9];
 console.log(BinarySearch(my_arr,7));
 