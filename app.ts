import Solution from './func.js'; 
import ShowSolution from './showResults.js';

const inputs = (`
I
XX
L
CD
XXX
`.split(/\r?\n/)).slice(1,-1);

ShowSolution('results', Solution, inputs);