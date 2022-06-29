import { generateElements } from './generateElements.js';
import { bubbleSort } from './bubbleSort.js';
const main = document.querySelector('main');
const bubbleSortButton = document.querySelector('#js_bubbleSort');
bubbleSortButton === null || bubbleSortButton === void 0 ? void 0 : bubbleSortButton.addEventListener('click', bubbleSort);
const reset = document.querySelector('#js_reset');
window.addEventListener('load', generateElements);
reset === null || reset === void 0 ? void 0 : reset.addEventListener('click', generateElements);
export { main };
