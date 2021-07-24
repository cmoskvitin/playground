function intToEnglish(num) {
    let englishInt;
    const wTeens = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Nineteen'];
    const wDoubles = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const wBillion = 'Billion';
    const wMillion = 'Million';
    const wThousand = 'Thousand';
    const wHundred = 'Hundred';
    let numString = num.toString();
    let hundredString = '';
    let thousandString = '';
    let millionString = '';
    let billionString = '';
    billionString = numString.charAt(0);
    millionString = numString.slice(1, 4);
    thousandString = numString.slice(4, 7);
    hundredString = numString.slice(7, 10);
    englishInt = billionString + '|' + millionString + '|' + thousandString + '|' + hundredString + '|';
    return englishInt;
}
let intInput = [1933000561, 19001, 111, 11];
console.log(intInput);
let intChangeable = [''];
for (let i in intInput) {
    intChangeable[i] = intToEnglish(intInput[i]);
}
console.log(intChangeable);
/*     let Bcounter = 0;
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
   
   
   function CountHundreds(n: number){
       let counter = 0;
       while (n >= 100){
           n -= 100;
           counter++;
       };
       if(counter == 0){
           return wTeens[counter];
       }
       return wTeens[counter] + ' ' + wHundred + ' ';
   }
   
   function CountDoubles(n: number){
       let counter = 0;
       if (n >= 20){
           while (n >= 10){
               n -= 10;
               counter++;
           };
       }
       if(counter == 0){
           return wDoubles[counter];
       }
       return wDoubles[counter] + ' ';
   }

   function CountTeens(n: number){
       let counter = 0;
       while (n >= 1){
           n -= 1;
           counter++;
       };
       return wTeens[counter];
   }



   while (num >= 1000000000){
       num -= 1000000000;
       Bcounter++;
   };
   if (Bcounter == 0){
       Bstring = '';
   } else{
       Bstring = wTeens[Bcounter] + ' ' + wBillion;
   }

   while (num >= 1000000){
       num -= 1000000;
       Mcounter++;
   };
   if (Mcounter == 0){
       Mstring = '';
   } else{
       Mstring += CountHundreds(Mcounter) + CountDoubles(Mcounter) + CountTeens(Mcounter) + ' ' + wMillion;
   }

   while (num >= 1000){
       num -= 1000;
       Tcounter++;
   };
   if (Tcounter == 0){
       Tstring = '';
   } else{
       Tstring = CountHundreds(Tcounter) + CountDoubles(Tcounter) + CountTeens(Tcounter) + ' ' + wThousand;
   }

   while (num >= 100){
       num -= 100;
       Hcounter++;
   };
   if (Hcounter == 0){
       Hstring = '';
   } else{
       Hstring = CountTeens(Hcounter) + ' ' + wHundred;
   }

   while (num >= 20){
       num -= 10;
       Dcounter++;
   };
   if (Dcounter == 0){
       Hstring = '';
   } else{
       Dstring = wDoubles[Dcounter];
   }

   
   englishInt = Bstring + Mstring + Tstring + Hstring + Dstring + CountTeens(num); */ 
