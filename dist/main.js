import { generateElements } from './elementsGeneration/generateElements.js';
import { bubbleSort } from './bubbleSort.js';
import { quickSort } from './quickSort.js';
const main = document.querySelector('main');
const bubbleSortButton = document.querySelector('#js_bubbleSort');
bubbleSortButton === null || bubbleSortButton === void 0 ? void 0 : bubbleSortButton.addEventListener('click', bubbleSort);
const quickSortButton = document.querySelector('#js_quickSort');
quickSortButton === null || quickSortButton === void 0 ? void 0 : quickSortButton.addEventListener('click', quickSort);
const reset = document.querySelector('#js_reset');
window.addEventListener('load', generateElements);
reset === null || reset === void 0 ? void 0 : reset.addEventListener('click', generateElements);
export { main };
