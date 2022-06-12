/* eslint-disable */
import { maxNumberOfElements } from './constants.js';

const main = document.querySelector('main') as HTMLElement;
// const rangeOfElements = document.querySelector(
//   '#rangeOfElements',
// ) as HTMLElement;
const reset = document.querySelector('#reset') as HTMLElement;
// let numberOfElements: number;

function generateElements(): void {
    let lastChild = main.lastElementChild;
    while (lastChild) {
        main.removeChild(lastChild);
        lastChild = main.lastElementChild;
    }
    for (let i = 0; i < maxNumberOfElements; i++) {
        const element = document.createElement('div');
        element.classList.add('element');
        const height: string = `${Math.floor(Math.random() * 70 + 1)}vh`;
        element.style.height = height;
        main?.appendChild(element);
    }
}

window.addEventListener('load', generateElements);
reset?.addEventListener('click', generateElements);
