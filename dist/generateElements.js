import { maxNumberOfElements } from './constants.js';
import { main } from './main.js';
function generateHeights(max, min) {
  const heights = [];
  for (let i = 0; i < maxNumberOfElements; i++) {
    const height = `${Math.floor(Math.random() * max + min)}vh`;
    heights.push(height);
  }
  return heights;
}
function generateElements() {
  let lastChild = main.lastElementChild;
  while (lastChild) {
    main.removeChild(lastChild);
    lastChild = main.lastElementChild;
  }
  const heights = generateHeights(80, 5);
  // eslint-disable-next-line array-callback-return
  heights.map((height) => {
    const element = document.createElement('div');
    element.classList.add('element');
    element.style.height = height;
    main === null || main === void 0 ? void 0 : main.appendChild(element);
  });
}
export { main, generateElements };
