

// Task 3 Palindrome Number
const Palindrome=(num)=>{
    if(num<0)
        return false;
    let rev=0;
    let temp=num;
    while(temp>0){
        rev=rev*10+(temp%10);
        temp=Math.floor(temp/10);
    }
    if(rev==num)
        return true;
    return false;
}

const test1=Palindrome(121);
const test2=Palindrome(-1221);
const test3=Palindrome(123);
const test4=Palindrome(1331);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
