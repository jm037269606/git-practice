/*挑戰題：如果 sum 函式的輸入是 n，並且需要傳回 1 + 2 + 3 + ... + n，且不能使用 for 或 while 迴圈？*/
/*利用高斯加總公式 Sum(n) = n(n+1)/2 */
function sum(n) {
    return (n * (n + 1)) / 2;
}

console.log(sum(5));  // 15  (1 + 2 + 3 + 4 + 5)
console.log(sum(10)); // 55  (1 + 2 + 3 + ... + 10)
