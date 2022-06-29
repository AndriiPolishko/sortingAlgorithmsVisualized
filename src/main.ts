import { generateElements } from './generateElements.js';
import { bubbleSort } from './bubbleSort.js';

const main = document.querySelector('main') as HTMLElement;

// const rangeOfElements = document.querySelector('#js.rangeOfElements') as HTMLInputElement;
// let numberOfElements: number = +rangeOfElements?.value;
// rangeOfElements.addEventListener("input", (e) => {
//     numberOfElements = +rangeOfElements?.value;
// })

const bubbleSortButton = document.querySelector('#js_bubbleSort');
bubbleSortButton?.addEventListener('click', bubbleSort);

const reset = document.querySelector('#js_reset') as HTMLElement;
window.addEventListener('load', generateElements);
reset?.addEventListener('click', generateElements);

export { main };
