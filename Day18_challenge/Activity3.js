
//Task 5

const mpp=new Map();

function count(str){
    for(let char of str){
        if(mpp.has(char)){
            mpp.set(char,mpp.get(char)+1);
        }
        else{
            mpp.set(char,1);
        }
    }
    for(let [char,count] of mpp){
        console.log(`${char} : ${count}`);
    }
}
const str="mahendrasinghdhoni";
count(str);
// console.log(mpp.get('l'));



// Task 6

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
const string="tarun";
console.log("LongestSubstring length: ",LongestSubstring(string));
