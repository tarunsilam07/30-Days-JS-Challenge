

// Task 3 Trapping Rain Water

function trap(height) {
    let n = height.length;
    let left = 0;
    let right = n - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let ans = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                ans += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                ans += maxRight - height[right];
            }
            right--;
        }
    }
    
    return ans;
}


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));            
console.log(trap([2,0,2]));                  
console.log(trap([3,0,1,3,0,5]));            
