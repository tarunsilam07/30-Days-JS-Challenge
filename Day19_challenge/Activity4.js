
// Task 7

const regex=/^\b\w+/;
const exp1="Mahendra Singh Dhoni";
const exp2="77Tarun";
const exp3="  Tarun";
const exp4="TheFinisher";
function check(str){
    const match=str.match(regex);
    if(match){
        console.log(match);
    }
    else{
        console.log("Not Vaild");
    }
}
check(exp1);
check(exp2);
check(exp3);
check(exp4);

// Task 8

const reg=/\b\w+$/;
const exp5="Mahendra Singh Dhoni";
const exp6="Tarun  ";

const match2=exp5.match(reg);
console.log(match2);
const match3=exp6.match(reg);
console.log(match3);

