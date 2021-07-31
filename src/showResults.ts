export default function ShowResultsDOM(elem: string, func:Function, inputValues:string[], inputType:string):void{ 
    //INPUTS TRANSFORMATION
    let funcInputs = [];
    switch (inputType){
        case 'strings':
            funcInputs = inputValues;
            break;
        case 'numbers':
            for (let i=0; i < inputValues.length; i++){
                funcInputs[i] = +inputValues[i];
            }
            break;
        case 'stringsArr':
            for (let i=0; i < inputValues.length; i++){
                let temp = inputValues[i].split(',');
                funcInputs[i]=[];
                for (let j=0; j < temp.length; j++){
                    funcInputs[i][j] = temp[j];
                }
            }
            break;
        case 'numbersArr':
            for (let i=0; i < inputValues.length; i++){
                let temp = inputValues[i].split(',');
                funcInputs[i]=[];
                for (let j=0; j < temp.length; j++){
                    funcInputs[i][j] = +temp[j];
                }
            }
            break;
    }
    
    
    //DOM THINGS
    const placeToInsert = document.getElementById(elem); 

    const classContainer = 'ibit';
    const classInputBlock = 'input';
    const classOutputBlock = 'output';
    const classNumerator = 'numerator';

    for (let i in inputValues){
        let container = document.createElement('div');
        let inputBlock = document.createElement('div');
        let outputBlock = document.createElement('div');
        let numerator = document.createElement('div');

        container.classList.add(classContainer);
        inputBlock.classList.add(classInputBlock);
        outputBlock.classList.add(classOutputBlock);
        numerator.classList.add(classNumerator);


        placeToInsert.appendChild(container);
        container.appendChild(inputBlock);
        container.appendChild(numerator);
        container.appendChild(outputBlock);
        numerator.textContent = i.toString();
        inputBlock.textContent = funcInputs[i].toString();
        outputBlock.textContent = func(funcInputs[i]).toString();
    }
    
}