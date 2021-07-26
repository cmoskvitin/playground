export default function romanToInt(s: string): number {
    let sum = 0;
    for (let i = 0; i < s.length; i++){
        
        let currentRoman = s.charAt(i);
        let previousRoman = s.charAt(i - 1);
        
        
        if (currentRoman == 'I'){
            sum += 1;
        } else if (currentRoman == 'V'){
            sum += 5;
        } else if (currentRoman == 'X'){
            sum += 10;
        } else if (currentRoman == 'L'){
            sum += 50;
        } else if (currentRoman == 'C'){
            sum += 100;
        } else if (currentRoman == 'D'){
            sum += 500;
        } else if (currentRoman == 'M'){
            sum += 1000;
        };
        
        if (previousRoman == 'I'){
            if (currentRoman == 'V' || currentRoman == 'X'){
                sum -= 2;
            }              
        } else if (previousRoman == 'X'){
            if (currentRoman == 'L' || currentRoman == 'C'){
                sum -= 20;
            }
        } else if (previousRoman == 'C'){
            if (currentRoman == 'D' || currentRoman == 'M'){
                sum -= 200;
            }
        }; 
    };
    return sum; 
};