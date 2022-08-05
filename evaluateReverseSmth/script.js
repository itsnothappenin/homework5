var evalRPN = function(tokens) {
   const stack = [];
   let n1 = 0;
   let n2 = 0;
   let n3 = 0;

   for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '+') {
        stack.push(stack.pop() + stack.pop())
    } else if (tokens[i] === '-') {
        n1 = stack.pop()
        n2 = stack.pop()
        stack.push(n2 - n1)
    } else if (tokens[i] === '*') {
        stack.push(stack.pop() * stack.pop())
    } else if (tokens[i] === '/')  {
        n1 = stack.pop();
        n2 = stack.pop();
        n3 = n2 / n1
        stack.push(n3 > 0 ? Math.floor(n3) : Math.ceil(n3))
    } else {
        stack.push(tokens[i])
    }
   }
  return stack.pop();

};
