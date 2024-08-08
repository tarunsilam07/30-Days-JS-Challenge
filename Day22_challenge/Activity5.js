

// Task 5  Group Anagrams

function groupAnagrams(strs) {
    const ans = [];
    const sortedStrs = strs.map(str => str.split('').sort().join(''));
    const map = new Map();

    sortedStrs.forEach((sortedStr, index) => {
        if (!map.has(sortedStr)) {
            map.set(sortedStr, ans.length);
            ans.push([]);
        }
        ans[map.get(sortedStr)].push(strs[index]);
    });

    return ans;
}
const arr1=["eat", "tea", "tan", "ate", "nat", "bat"];
const arr2=[""];
const arr3=["abcd", "dcba", "bacd", "dabc"];
const arr4=["a"];
const test1=groupAnagrams(arr1);
const test2=groupAnagrams(arr2);
const test3=groupAnagrams(arr3);
const test4=groupAnagrams(arr4);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
