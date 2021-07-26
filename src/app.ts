import Solution from '../dist/func.js'; 
import ShowSolution from '../dist/showResults.js';

const inputs = (`
I
XX
CCCD
CD
XXIV
CCM
MMMCD
`.split(/\r?\n/)).slice(1,-1);

ShowSolution('results', Solution, inputs);