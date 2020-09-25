/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length %2 !== 0){
        return false;
    }
    
    const stack = [];
    for(let i=0; i<s.length; i++){
        const char = s[i];
        if(char === '(' || char ==='[' || char ==='{'){
            stack.push(char);
        }else{
            if(stack.length === 0){
                return false;
            }
            const lastParenthesis = stack.pop();
            if(lastParenthesis ==='(' && char !==')'){
                return false;
            }
            if(lastParenthesis === '[' && char !==']'){
                return false;
            }
            if(lastParenthesis === '{' && char !=='}'){
                return false;
            }
        }
    }

    return !stack.length;
};