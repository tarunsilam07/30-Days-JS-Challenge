
// Task 1 BubbleSort

function BubbleSort(arr=[]){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1])
            {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

arr=[3,4,1,9,7,2];
console.log(BubbleSort(arr));

// Task 2 SelectionSort

function SelectionSort(arr=[]){
    for(let i=0;i<arr.length-1;i++)
    {
        let index=i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[index])
            {
                index=j;
            }
        }
        if(index!=i){
        [arr[i],arr[index]]=[arr[index],arr[i]];
        }
    }
    return arr;
}
my_arr=[3,2,1,7,8,4];
console.log(SelectionSort(my_arr));

// Task 3 Quick Sort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    let equal = [];

    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    // Recursively sort left and right arrays, then concatenate them with equal array
    return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
let myArr = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(myArr)); 




