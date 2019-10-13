/*
  Data structure: hashtable, stack
  Ref: https://leetcode.com/problems/valid-parentheses/submissions/
  Challenge: https://leetcode.com/problems/valid-parentheses/
*/

const proxies = {
  '{': '}',
  '(': ')',
  '[': ']'
};

const isValid = str => {
  if (str.length % 2 === 1) {
    return false;
  }
  if (str.length === 0) {
    return true;
  }

  let stack = [str[0]];
  let lfPoint = 1;

  while (lfPoint < str.length) {
    const expected = proxies[stack[stack.length - 1]];
    const curValue = str[lfPoint];
    lfPoint++;
    if (curValue === expected) {
      stack.pop();
    } else {
      stack.push(curValue);
    }
  }
  return stack.length === 0;
};