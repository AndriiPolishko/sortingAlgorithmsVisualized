import { maxHeight, minHeight } from './constants.js';

import { main } from './main.js';

const rangeOfElements = document.querySelector(
  '#js_rangeOfElements',
) as HTMLInputElement;

function generateHeights(max: number, min: number, n: number) {
  const heights: Array<string> = [];
  for (let i = 0; i < n; i++) {
    const height: string = `${Math.floor(Math.random() * max + min)}vh`;
    heights.push(height);
  }
  return heights;
}

function generateElements(): void {
  // clear all elements
  let lastChild = main.lastElementChild;
  while (lastChild) {
    main.removeChild(lastChild);
    lastChild = main.lastElementChild;
  }

  const value = rangeOfElements?.value;
  const numberOfElements = parseInt(value, 10) * 7 + 300;

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

export { main, generateElements };
