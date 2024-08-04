
// Task 7

function rotate(arr = [], k) {
    const n = arr.length;
    k = k % n;
    rev(arr, 0, n - 1);
    rev(arr, 0, k - 1);
    rev(arr, k, n - 1);
    return arr;
}

function rev(arr = [], start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(arr, 3)); 

// Task 8

function Merge(arr1=[],arr2=[]){
    const n=arr1.length;
    const m=arr2.length;
    let arr3=[];
    let i=0;
    let j=0;
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            arr3.push(arr1[i]);
            i++;
        }
        else{
            arr3.push(arr2[j]);
            j++;
        }
    }
    while(i<n){
        arr3.push(arr1[i]);
        i++;
    }
    while(j<m){
        arr3.push(arr2[j]);
        j++;
    }
    
    return arr3;
}

const arr1=[1,3,5,7];
const arr2=[2,4,6,8];
console.log(Merge(arr1,arr2));
