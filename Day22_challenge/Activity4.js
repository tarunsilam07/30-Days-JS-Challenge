

// Task 4 3 Sum
function threeSum(nums) {
    const ans = [];
    const n = nums.length;
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let j = i + 1;
        let k = n - 1;
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            
            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    
    return ans;
}


const arr1=[-1, 0, 1, 2, -1, -4];
const arr2=[0, 1, 1];
const arr3=[-2, 0, 0, 2, 2];
const test1=threeSum(arr1);
const test2=threeSum(arr2);
const test3=threeSum(arr3);
console.log((test1));
console.log(test2);
console.log(test3);


