const alphabetMap = new Map([
    ['a',0],
    ['b',1],
    ['c',2],
    ['d',3],
    ['e',4],
    ['f',5],
    ['g',6],
    ['h',7],
    ['i',8],
    ['j',9],
    ['k',10],
    ['l',11],
    ['m',12],
    ['n',13],
    ['o',14],
    ['p',15],
    ['q',16],
    ['r',17],
    ['s',18],
    ['t',19],
    ['u',20],
    ['v',21],
    ['w',22],
    ['x',23],
    ['y',24],
    ['z',25]

]);

    const sArr = Array.from(s);

    let indexArr: number[] = [];
    let widthsArr: number[] = [];

    for (let i = 0; i < s.length; i++){
        indexArr.push(alphabetMap.get(sArr[i]));
        widthsArr.push(widths[indexArr[i]]);
    }

    let strCounter = 0;
    let i = 0;
    let lastStrLength = 0;

    for (let i = 0; i < str.length; i++){
        if (i == 0){
            sum += widthsArr[i];
        }

        if (sum == 100 && i == str.length - 1){
            strCounter++;
            break;
        }
        
        let nextValue = widthsArr[i + 1];
        if (sum + nextValue > 100){
            strCounter++;
            sum = nextValue;
        } else {
            sum += nextValue;
        }

        if (sum == 100)
    }

    // const sArr = Array.from(s);

    // let indexArr: number[] = [];
    // let widthsArr: number[] = [];

    // for (let i = 0; i < s.length; i++){
    //     indexArr.push(alphabetMap.get(sArr[i]));
    //     widthsArr.push(widths[indexArr[i]]);
    // }

    // let strCounter = 0;
    // let i = 0;
    // let lastStrLength = 0;

    // while (i < widthsArr.length ){

    //     let sum = 0;
    //     while (sum <= 100 && i < widthsArr.length) {
    //         sum += widthsArr[i];
    //         i++;
    //         if (sum > 100){
    //             i--;
    //             sum -= widthsArr[i];
    //             break;
    //         }
    //     }
    //     lastStrLength = sum;    
    //     strCounter++;
    // }
    
    // return [strCounter, lastStrLength];
