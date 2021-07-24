function numberOfLines(widths, s) {
    var alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    var widthsArr = [];
    for (var i = 0; i < s.length; i++) {
        widthsArr.push(widths[alphabetStr.indexOf(s.charAt(i))]);
    }
    var strCounter = 0;
    var lastStrLength = 0;
    var sum = 0;
    for (var i = 0; i < s.length - 1; i++) {
        var nextValue = widthsArr[i + 1];
        if (sum + nextValue > 100) {
            strCounter++;
            sum = nextValue;
        }
        else {
            sum += nextValue;
        }
        if (sum == 100 && i == s.length - 1) {
            strCounter++;
            lastStrLength = sum;
            break;
        }
        lastStrLength = sum;
    }
    return [strCounter, lastStrLength];
}
;
var widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var str = "abcdefghijklmnopqrstuvwxyz";
console.log(numberOfLines(widths, str));
