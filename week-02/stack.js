// stack.js
//在 JavaScript 中，# 用來宣告 私有屬性。這表示該屬性只能在類別內部存取，外部無法直接存取或修改。

export default class Stack {
    #items;

    // 初始化一個空的陣列作為 Stack
    constructor() {
      this.#items = []; 
    }
  
    // 在 stack 頂部加入數值
    push(element) {
      this.#items.push(element); // 使用陣列的 push 方法
    }
  
    // 移除並回傳 stack 頂部的元素
    pop() {
      return this.#items.pop(); // 使用陣列的 pop 方法
    }
  
    // 回傳 stack 頂部的數值
    peek() {
      return this.#items[this.#items.length - 1]; // 取得陣列最後一個元素
    }
  
    // 檢查 stack 是否為空
    isEmpty() {
      return this.#items.length === 0;
    }
  
    // 回傳 stack 中元素的個數
    size() {
      return this.#items.length;
    }
  
    // 清空 stack
    clear() {
      this.#items = []; // 直接將陣列設為空陣列
    }
  
    // 印出 stack 內容
    print() {
      console.log(this.#items.toString());
    }
  }
  