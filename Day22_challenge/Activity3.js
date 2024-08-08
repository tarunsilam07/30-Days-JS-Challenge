

// Task 3 Container with most Water

function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

function testMaxArea() {
    let heights = [
        [1, 8, 6, 2, 5, 4, 8, 3, 7],
        [1, 1],
        [4, 3, 2, 1, 4],
        [1, 2, 1]
    ];
    for (let i = 0; i < heights.length; i++) {
        let result = maxArea(heights[i]);
        console.log(result);
    }
}
testMaxArea();
