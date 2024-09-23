// main.js
import Stack from './stack.js';

let stack = new Stack();

// 測試 stack 是空的
console.log("Is stack empty?", stack.isEmpty()); // true

// 測試 push 操作
stack.push(5);
stack.push(8);
stack.print(); // 5,8

// 測試 peek 操作
console.log("Peek top element:", stack.peek()); // 8

// 測試 pop 操作
console.log("Popped element:", stack.pop()); // 8
stack.print(); // 5

// 測試 size 操作
console.log("Stack size:", stack.size()); // 1

// 測試 clear 操作
stack.clear();
console.log("Is stack empty after clear?", stack.isEmpty()); // true
stack.print(); // (empty output)
