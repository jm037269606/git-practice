function sum(ary) {
    return ary.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum([1, 5, 3, 2])); // 11
