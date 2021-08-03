import * as InputTypes from './inputTypes';

// Сет входящих данных:
// Каждый элемент массива в сете является набором тестовых значений, которые передаются в аргументы тестируемой функции.
// Например, если аргументов 2, делаем так:
// func(TransformInputs(inputsSet[0])[i],TransformInputs(inputsSet[1])[i]) 

const inputsSet:InputTypes.INPUTOBJECT[] = [
    {
        values: `
0,2,7
1,3,5,7,8
10,20,30,40
        `,
        type: InputTypes.INPUTTYPES.NumbersArr
    },
    {
        values: `
9
10
30
        `,
        type: InputTypes.INPUTTYPES.NumbersArr
    }
]

function TransformInput(input:InputTypes.INPUTOBJECT):any {
    let inputStrings = input.values.split(/\r?\n/).slice(1,-1);

    if (input.type == InputTypes.INPUTTYPES.Strings) {
        return inputStrings;
    } //return ['string1','string2']

    if (input.type == InputTypes.INPUTTYPES.Numbers){
        let funcInputs:number[] = [];
        for (let i=0; i < inputStrings.length; i++){
            funcInputs[i] = +inputStrings[i];
        }
        return funcInputs;
    } //return [1,2,3,4]
    
    if (input.type == InputTypes.INPUTTYPES.StringsArr) {
        let funcInputs:string[][] = [];
        for (let i=0; i < inputStrings.length; i++){
            
            funcInputs[i]=inputStrings[i].split(',');
            // let temp = inputStrings[i].split(',');
            // funcInputs[i]=[''];
            // for (let j=0; j < temp.length; j++){
            //     funcInputs[i][j] = temp[j];
            // }
        }
        return funcInputs;
    } //return [['string1', 'string2'],['string3','string4']]

    if (input.type == InputTypes.INPUTTYPES.NumbersArr) {
        let funcInputs:number[][] = [];
        for (let i=0; i < inputStrings.length; i++){
            // funcInputs[i]= +inputStrings[i].split(',');
            let temp = inputStrings[i].split(',');
            funcInputs[i]=[];
            for (let j=0; j < temp.length; j++){
                funcInputs[i][j] = +temp[j];
            }
        }
        return funcInputs;
    } //return [[1,2,3],[4,5,6]]
}

export let testInputs:any[][] = [];
for (let i = 0; i < TransformInput(inputsSet[0]).length; i++){
    testInputs[i] = [];
    for (let j = 0; j < inputsSet.length; j++){
        testInputs[i][j] = TransformInput(inputsSet[j])[i];
    }
    // testInputs[i] = [TransformInput(inputsSet[0])[i],TransformInput(inputsSet[1])[i]];
}



