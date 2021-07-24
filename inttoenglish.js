function intToEnglish(num) {
    let englishInt;
    const wTeens = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Nineteen'];
    const wDoubles = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const wBillion = 'Billion';
    const wMillion = 'Million';
    const wThousand = 'Thousand';
    const wHundred = 'Hundred';
    let Bcounter = 0;
    let Mcounter = 0;
    let Tcounter = 0;
    let Hcounter = 0;
    let Dcounter = 0;
    let TNcounter = 0;
    let Bstring = '';
    let Mstring = '';
    let Tstring = '';
    let Hstring = '';
    let Dstring = '';
    let TNstring = '';
    function CountHundreds(n) {
        let counter = 0;
        while (n >= 100) {
            n -= 100;
            counter++;
        }
        ;
        if (counter == 0) {
            return [wTeens[counter], n];
        }
        return [wTeens[counter] + ' ' + wHundred + ' ', n];
    }
    function CountDoubles(n) {
        let counter = 0;
        if (n >= 20) {
            while (n >= 10) {
                n -= 10;
                counter++;
            }
            ;
        }
        if (counter == 0) {
            return [wDoubles[counter], n];
        }
        return [wDoubles[counter] + ' ', n];
    }
    function CountTeens(n) {
        let counter = 0;
        while (n >= 1) {
            n -= 1;
            counter++;
        }
        ;
        return [wTeens[counter], n];
    }
    while (num >= 1000000000) {
        num -= 1000000000;
        Bcounter++;
    }
    ;
    if (Bcounter == 0) {
        Bstring = '';
    }
    else {
        Bstring = wTeens[Bcounter] + ' ' + wBillion + ' ';
    }
    while (num >= 1000000) {
        num -= 1000000;
        Mcounter++;
    }
    ;
    if (Mcounter == 0) {
        Mstring = '';
    }
    else {
        Mstring += CountHundreds(Mcounter)[0];
        Mcounter = CountHundreds(Mcounter)[1];
        Mstring += CountDoubles(Mcounter)[0];
        Mcounter = CountDoubles(Mcounter)[1];
        Mstring += CountTeens(Mcounter)[0] + ' ' + wMillion + ' ';
    }
    while (num >= 1000) {
        num -= 1000;
        Tcounter++;
    }
    ;
    if (Tcounter == 0) {
        Tstring = '';
    }
    else {
        Tstring += CountHundreds(Tcounter)[0];
        Tcounter = CountHundreds(Tcounter)[1];
        Tstring += CountDoubles(Tcounter)[0];
        Tcounter = CountDoubles(Tcounter)[1];
        Tstring += CountTeens(Tcounter)[0] + ' ' + wThousand + ' ';
    }
    while (num >= 100) {
        num -= 100;
        Hcounter++;
    }
    ;
    if (Hcounter == 0) {
        Hstring = '';
    }
    else {
        Hstring = CountTeens(Hcounter)[0] + ' ' + wHundred + ' ';
    }
    while (num >= 20) {
        num -= 10;
        Dcounter++;
    }
    ;
    if (Dcounter == 0) {
        Hstring = '';
    }
    else {
        Dstring = wDoubles[Dcounter];
    }
    englishInt = Bstring + Mstring + Tstring + Hstring + Dstring + CountTeens(num)[0];
    return englishInt;
}
let intInput = [1933845000, 19331, 111, 11, 10];
console.log(intInput);
let intChangeable = [''];
for (let i in intInput) {
    intChangeable[i] = intToEnglish(intInput[i]);
}
console.log(intChangeable);
