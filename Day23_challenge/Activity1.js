

// Task 1 Median of Two Sorted Arrays

function findMedianSortedArrays(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let low = 0, high = n1;
    const left = Math.floor((n1 + n2 + 1) / 2);
    const n = n1 + n2;

    while (low <= high) {
        const mid1 = Math.floor((low + high) / 2);
        const mid2 = left - mid1;

        const l1 = mid1 > 0 ? nums1[mid1 - 1] : Number.MIN_SAFE_INTEGER;
        const l2 = mid2 > 0 ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER;
        const r1 = mid1 < n1 ? nums1[mid1] : Number.MAX_SAFE_INTEGER;
        const r2 = mid2 < n2 ? nums2[mid2] : Number.MAX_SAFE_INTEGER;

        if (l1 <= r2 && l2 <= r1) {
            if (n % 2 === 1) {
                return Math.max(l1, l2);
            } else {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
            }
        } else if (l1 > r2) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
    }
    
    return 0;
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays([1, 2], [3, 4])); 
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([2], []));


