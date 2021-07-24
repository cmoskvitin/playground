function add(num1: number, num2: number, print: boolean, phrase: string) {
  const result = num1 + num2;
  if (print) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const a = 4;
const b = 5.6;
const shouldPrint = true;
const printPhrase = "Result is: ";

add(a, b, shouldPrint, printPhrase);
