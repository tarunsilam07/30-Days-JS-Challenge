

// Task 1 - Two sum

function TwoSum(arr=[],target){
    const mpp=new Map();
    const n=arr.length;
    for(let i=0;i<n;i++){
        const num=arr[i];
        let remove=target-num;
        if(mpp.has(remove)){
            return [i,mpp.get(remove)];
        }
        mpp.set(num,i);
    }
    return [-1,-1];
}

const arr1=[2,7,11,15];
const arr2=[3,2,4];
const arr3=[3,3];
const test1=TwoSum(arr1,9);
const test2=TwoSum(arr2,6);
const test3=TwoSum(arr3,6);
console.log(test1);
console.log(test2);
console.log(test3);

