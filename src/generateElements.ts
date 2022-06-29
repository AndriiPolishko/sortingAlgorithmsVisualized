import { maxNumberOfElements } from './constants.js';

import { main } from './main.js';

function generateHeights(max: number, min: number) {
  const heights: Array<string> = [];
  for (let i = 0; i < maxNumberOfElements; i++) {
    const height: string = `${Math.floor(Math.random() * max + min)}vh`;
    heights.push(height);
  }
  return heights;
}

function generateElements(): void {
  let lastChild = main.lastElementChild;
  while (lastChild) {
    main.removeChild(lastChild);
    lastChild = main.lastElementChild;
  }

  const heights: Array<string> = generateHeights(80, 5);

  // eslint-disable-next-line array-callback-return
  heights.map((height) => {
    const element: HTMLElement = document.createElement('div');
    element.classList.add('element');
    element.style.height = height;
    main?.appendChild(element);
  });
}

export { main, generateElements };
