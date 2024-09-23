//用迭代方式計算出最後的費波納契數（0,1,1,2,3,5......55）

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}

console.log(fib(0));  // 0
console.log(fib(1));  // 1
console.log(fib(5));  // 5
console.log(fib(10)); // 55
