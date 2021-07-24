function level1(n) {
    n = 20;
    function level2(n) {
        n = 30;
        return n;
    }
    n = level2(n);
    return n;
}
let num = 10;
num = level1(num);
console.log(level1(num));
