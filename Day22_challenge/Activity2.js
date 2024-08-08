

// Task 2 Longest Substring without repeating characters
function LongestSubstring(str){
    let left=0;
    let right=0;
    let n=str.length;
    let maxlen=0;
    const mpp=new Map();
    while(right<n){
        const char=str[right];
        if(mpp.has(char) && mpp.get(char)>=left){
            left=mpp.get(char)+1;
        }
        mpp.set(char,right);
        maxlen=Math.max(maxlen,right-left+1);
        right++;
    }
    return maxlen;
}

const test1=LongestSubstring("abcabcbb");
const test2=LongestSubstring("bbbbb");
const test3=LongestSubstring("pwwkew");
console.log(test1);
console.log(test2);
console.log(test3);


