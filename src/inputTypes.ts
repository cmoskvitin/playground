export const enum INPUTTYPES {
    Strings,
    Numbers,
    StringsArr,
    NumbersArr
}
export type INPUTOBJECT = {
    values: string,
    type: INPUTTYPES
}