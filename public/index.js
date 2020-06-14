import { run1 } from './fifo.js';

const button1 = document.querySelector('button');

function run(){
    const input = run1('inputQueue');
    console.log(input);
}

button1.addEventListener('click',run());
