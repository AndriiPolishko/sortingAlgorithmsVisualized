import { maxHeight, minHeight, multiplicationOfNumberOfElements, defaultNumberOfElements, } from '../constants.js';
import { main } from '../main.js';
import { generateHeights } from './generateHeights.js';
const rangeOfElements = document.querySelector('#js_rangeOfElements');
function generateElements() {
    // clear all elements
    let lastChild = main.lastElementChild;
    while (lastChild) {
        main.removeChild(lastChild);
        lastChild = main.lastElementChild;
    }
    const value = rangeOfElements === null || rangeOfElements === void 0 ? void 0 : rangeOfElements.value;
    const numberOfElements = parseInt(value, 10) * multiplicationOfNumberOfElements +
        defaultNumberOfElements;
    const heights = generateHeights(maxHeight, minHeight, numberOfElements);
    // eslint-disable-next-line array-callback-return
    heights.map((height) => {
        const element = document.createElement('div');
        element.classList.add('element');
        element.style.height = height;
        main === null || main === void 0 ? void 0 : main.appendChild(element);
    });
}
rangeOfElements.addEventListener('input', generateElements);
export { generateElements };
