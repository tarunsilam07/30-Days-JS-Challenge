// Task 9

const regex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*!])[A-Za-z\d@$!%*?&]{8,}$/;
const pass1="Tarun@123";
const pass2="password";
 function check(str){
    const match=str.match(regex);
    if(match){
        console.log("Valid password");
        
    }
    else
        console.log("Not Valid");
 }
 check(pass1);
 check(pass2);

 // Task 10 

 const url=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
 const web1="https://chatgpt.com/";
 const web2="https://www.youtube.com/";
 const web3="assam";
 function validate(web){
    const match=web.match(url);
    if(match){
        console.log("valid url");
        
    }
    else
        console.log("invalid url");
        
 }
 validate(web1);
 validate(web2);
 validate(web3);