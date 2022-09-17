import {
  maxHeight,
  minHeight,
  multiplicationOfNumberOfElements,
  defaultNumberOfElements,
} from '../aditions/constants.js';

import { main } from '../main.js';

import { generateHeights } from './generateHeights.js';

const rangeOfElements = document.querySelector(
  '#js_rangeOfElements',
) as HTMLInputElement;

function generateElements(): void {
  // clear all elements
  let lastChild = main.lastElementChild;
  while (lastChild) {
    main.removeChild(lastChild);
    lastChild = main.lastElementChild;
  }

  const value = rangeOfElements?.value;
  const numberOfElements =
    parseInt(value, 10) * multiplicationOfNumberOfElements +
    defaultNumberOfElements;

  const heights: Array<string> = generateHeights(
    maxHeight,
    minHeight,
    numberOfElements,
  );

  // eslint-disable-next-line array-callback-return
  heights.map((height) => {
    const element: HTMLElement = document.createElement('div');
    element.classList.add('element');
    element.style.height = height;
    main?.appendChild(element);
  });
}

rangeOfElements.addEventListener('input', generateElements);

export { generateElements };
