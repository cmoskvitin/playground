function intToEnglish(num: number): string {
    if (num == 0){
        return 'Zero';
    }

    let englishInt: string;

    const wTeens = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const wDoubles = ['', 'Ten','Twenty', 'Thirty', 'Forty', 'Fifty','Sixty', 'Seventy', 'Eighty', 'Ninety'];

    let firsts = ''; // Первый разряд - до тысячи (0-999)
    let thousands = ''; // Второй разряд - тысячи    (1,000 - 999,999)
    let millions = ''; // Третий разряд - миллионы  (1,000,000 - 999,999,999)
    let billions = ''; // Третий разряд - миллиарды (1,000,000,000 - 9,999,999,999) *в задаче есть ограничение: ввод не может быть больше 2^31-1
    
    let intArr = [0,0,0,0,0,0,0,0,0,0];
    let sInt = num.toString();

    
    for (let i = 1; i <= 10; i++){
            intArr[10 - i] = +sInt.charAt(sInt.length-i);
    }

    function CountHundreds(n: number): string{
        if (n == 0){
            return '';
        } else {
            return wTeens[n] + ' ' + 'Hundred ';
        }
    }

    function CountDoubles(n: [number, number]): string{
        if (n == [0,0]){
            return '';
        }
        if (n[0] == 0){
            return wTeens[n[1]];
        } else if (n[0] >= 2){
            if (n[1] != 0){
                return wDoubles[n[0]] + ' ' + wTeens[n[1]];
            } else {
                return wDoubles[n[0]];
            }
        } else if (n[0] == 1){
            return wTeens[n[1] + 10];
        }
    }


    firsts = CountHundreds(intArr[7]) + CountDoubles([intArr[8], intArr[9]]);
    thousands = CountHundreds(intArr[4]) + CountDoubles([intArr[5], intArr[6]]);
    millions = CountHundreds(intArr[1]) + CountDoubles([intArr[2], intArr[3]]);
    billions = CountDoubles([0,intArr[0]]);
    
    if (thousands != ''){
        thousands += ' Thousand'
    }
    if (firsts != ''){
        thousands += ' ';
    }

    if (millions != ''){
        millions += ' Million'
    }
    if (thousands != ''){
        millions += ' ';
    }

    if (billions != ''){
        billions += ' Billion'
    }
    if (millions != ''){
        billions += ' ';
    }

    if (billions == ' ' && millions != ''){
        billions = '';
    }
    if (millions == ' ' && thousands != ''){
        millions = '';
    }
    if (thousands == ' ' && firsts != ''){
        thousands = '';
    }


    
    englishInt = billions + millions + thousands + firsts;
    englishInt = englishInt.replace(/  /gi, ' ');
    if (englishInt.charAt(englishInt.length - 1) == ' '){
        englishInt = englishInt.slice(0, -1);
    }
    return englishInt;
}


let intInput = [1100100100, 100000000, 1000000, 100000, 20000, 19000, 1000, 100, 10, 1931805306, 333333333, 0, 1, 15, 3, 25]; 
console.log(intInput)


for (let i in intInput){
 
    console.log('"' + intToEnglish(intInput[i]) + '"');

}

 