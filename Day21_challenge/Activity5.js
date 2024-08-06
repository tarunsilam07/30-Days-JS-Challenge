

// Task 5
function isValid(s) {
    let st = [];
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch === '(' || ch === '[' || ch === '{') {
            st.push(ch);
        } else {
            if (st.length > 0) {
                let top = st[st.length - 1];
                if ((ch === '}' && top === '{') || (ch === ']' && top === '[') || (ch === ')' && top === '(')) {
                    st.pop();
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return st.length === 0;
}

const test1=isValid("()")
const test2=isValid("()[]{}")
const test3=isValid("(]")

console.log(test1);
console.log(test2);
console.log(test3);


