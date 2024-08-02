
// Task 5

function reverse(str) {
    if (str === "") {
        return "";
    }
    return reverse(str.substring(1)) + str.charAt(0);
}

console.log(reverse("tarun"));
console.log(reverse("dhoni"));
console.log(reverse("kohli"));

// Task 6

function palindrome(num,temp,rev){
    if(temp==0){
        if(num==rev){
            return true;
        }
        else return false;
    }
    rev=rev*10+temp%10;
    return palindrome(num,Math.floor(temp/10),rev);
}

const check=palindrome(121,121,0);
console.log(check);






