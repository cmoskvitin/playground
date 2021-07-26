import { romanToInt } from './func.js'; 
import { ShowResultsDOM } from './showResults.js';

const inputs = (`
I
XX
L
CD
XXX
`.split(/\r?\n/)).slice(1,-1);

ShowResultsDOM('results', romanToInt, inputs);