import { generateElements } from './elementsGeneration/generateElements.js';
import { bubbleSort } from './bubbleSort.js';
import { quickSort } from './quickSort.js';

const main = document.querySelector('main') as HTMLElement;

const bubbleSortButton = document.querySelector('#js_bubbleSort');
bubbleSortButton?.addEventListener('click', bubbleSort);
const quickSortButton = document.querySelector('#js_quickSort');
quickSortButton?.addEventListener('click', quickSort);

const reset = document.querySelector('#js_reset') as HTMLElement;
window.addEventListener('load', generateElements);
reset?.addEventListener('click', generateElements);

export { main };
