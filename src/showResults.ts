export function ShowResultsDOM(elem: string, func:Function, inputs:any[]):void{ 
    //INPUTS TRANSFORMATION
    // let funcInputs = [];
    // switch (inputType){
    //     case 'strings':
    //         funcInputs = inputValues;
    //         break;
    //     case 'numbers':
    //         for (let i=0; i < inputValues.length; i++){
    //             funcInputs[i] = +inputValues[i];
    //         }
    //         break;
    //     case 'stringsArr':
    //         for (let i=0; i < inputValues.length; i++){
    //             let temp = inputValues[i].split(',');
    //             funcInputs[i]=[];
    //             for (let j=0; j < temp.length; j++){
    //                 funcInputs[i][j] = temp[j];
    //             }
    //         }
    //         break;
    //     case 'numbersArr':
    //         for (let i=0; i < inputValues.length; i++){
    //             let temp = inputValues[i].split(',');
    //             funcInputs[i]=[];
    //             for (let j=0; j < temp.length; j++){
    //                 funcInputs[i][j] = +temp[j];
    //             }
    //         }
    //         break;
    
    
    //DOM THINGS
    const placeToInsert = document.getElementById(elem); 

    const classContainer = 'ibit';
    const classInputBlock = 'input';
    const classOutputBlock = 'output';
    const classNumerator = 'numerator';

    for (let i in inputs) {
        let container = document.createElement('div'); container.classList.add(classContainer);
        let outputBlock = document.createElement('div'); outputBlock.classList.add(classOutputBlock);
        let numerator = document.createElement('div'); numerator.classList.add(classNumerator);

        placeToInsert.appendChild(container);

        for (let j in inputs[i]) {
            let inputBlock = document.createElement('div'); inputBlock.classList.add(classInputBlock);
            container.appendChild(inputBlock);
            inputBlock.textContent = inputs[i][j].toString();
        }

        container.appendChild(numerator);
        numerator.textContent = i.toString();

        container.appendChild(outputBlock);
        outputBlock.textContent = func(...inputs[i]).toString();
    }
}