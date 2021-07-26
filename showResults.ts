export default function ShowResultsDOM(elem: string, func:Function, inputs:any[]):void{
    const placeToInsert = document.getElementById(elem);

    const classContainer = 'ibit';
    const classInputBlock = 'input';
    const classOutputBlock = 'output';
    const classNumerator = 'numerator';

    for (let i in inputs){
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
        inputBlock.textContent = inputs[i].toString();
        outputBlock.textContent = func(inputs[i]).toString();
    }
    
}