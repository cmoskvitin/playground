function intToRoman(num: number): string {
    let arabNum = num;
    let romanString: string;
    
    let Mcounter = 0;
    let Ccounter = 0;
    let Xcounter = 0;
    let Icounter = 0;
    let Mstring = '';
    let Cstring = '';
    let Xstring = '';
    let Istring = '';
    
    while (arabNum >= 1000){
        arabNum -= 1000;
        Mcounter++;
        Mstring += 'M';
    };
    while (arabNum >= 100){
        arabNum -= 100;
        Ccounter++;
        Cstring += 'C';
    };
    while (arabNum >= 10){
        arabNum -= 10;
        Xcounter++;
        Xstring += 'X';
    };
    while (arabNum >= 1){
        arabNum -= 1;
        Icounter++;
        Istring += 'I';
    };
    
    if (Ccounter >= 5 && Ccounter < 9){
        Cstring = 'D' + Cstring.slice(5);
    } else if (Ccounter == 4){
        Cstring = Cstring.slice(3) + 'D';
    } else if (Ccounter == 9){
        Cstring = Cstring.slice(8) + 'M';
    }

    if (Xcounter >= 5 && Xcounter < 9){
        Xstring = 'L' + Xstring.slice(5);
    } else if (Xcounter == 4){
        Xstring = Xstring.slice(3) + 'L';
    } else if (Xcounter == 9){
        Xstring = Xstring.slice(8) + 'C';
    };
    
    if (Icounter >= 5 && Icounter < 9){
        Istring = 'V' + Istring.slice(5);
    } else if (Icounter == 4){
        Istring = Istring.slice(3) + 'V';
    } else if (Icounter == 9){
        Istring = Istring.slice(8) + 'X';
    };

    romanString = Mstring + Cstring + Xstring + Istring;
    return romanString;
};







const intInput = [2935,4449,7439,1972,3953,799, 888, 937, 416, 44, 104, 934, 5014];
console.log(intInput);

for (let i in intInput){
    console.log(intToRoman(intInput[i]));
};
