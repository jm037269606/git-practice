function sum(ary) {
    let total = 0;
    ary.forEach(num => {
        total += num;
    });
    return total;
}


console.log(sum([1, 5, 3, 2])); // 11
