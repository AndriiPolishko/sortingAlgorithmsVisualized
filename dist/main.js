/* eslint-disable */
import { maxNumberOfElements } from './constants.js';
const main = document.querySelector('main');
// const rangeOfElements = document.querySelector(
//   '#rangeOfElements',
// ) as HTMLElement;
const reset = document.querySelector('#reset');
// let numberOfElements: number;
function generateElements() {
    let lastChild = main.lastElementChild;
    while (lastChild) {
        main.removeChild(lastChild);
        lastChild = main.lastElementChild;
    }
    for (let i = 0; i < maxNumberOfElements; i++) {
        const element = document.createElement('div');
        element.classList.add('element');
        const height = `${Math.floor(Math.random() * 70 + 1)}vh`;
        element.style.height = height;
        main === null || main === void 0 ? void 0 : main.appendChild(element);
    }
}
window.addEventListener('load', generateElements);
reset === null || reset === void 0
    ? void 0
    : reset.addEventListener('click', generateElements);
