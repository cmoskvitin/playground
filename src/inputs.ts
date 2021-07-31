const enum TYPES {
    Strings = 'strings',
    Numbers = 'numbers',
    StringsArr = 'stringsArr',
    NumbersArr = 'numbersArr'
}
export const Inputs = {
    values: `
33,40
100,1
323,100
    `.split(/\r?\n/).slice(1,-1),
    //УКАЖИ ТИП ДАННЫХ АЛОООООО
    type: TYPES.NumbersArr
}

