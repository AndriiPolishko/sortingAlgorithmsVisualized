/* eslint-disable no-param-reassign */
import { main } from '../main.js';
import { sleep } from '../aditions/sleep.js';
import { speed } from '../aditions/sortingSpeed.js';

const swap = (element1: HTMLElement, element2: HTMLElement) => {
  const temp = element1?.style.height;
  element1.style.height = element2?.style.height;
  element2.style.height = temp;

  element2.style.backgroundColor = 'red';
  element1.style.backgroundColor = 'black';
};

async function bubbleSort() {
  const elements = Array.from(main.children);
  const n = elements.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      const element1 = elements[j] as HTMLElement;
      const element2 = elements[j + 1] as HTMLElement;

      const size1 = parseInt(element1?.style.height, 10);
      const size2 = parseInt(element2?.style.height, 10);

      if (size1 > size2) {
        // eslint-disable-next-line no-await-in-loop
        await sleep(speed);
        swap(element1, element2);
      } else {
        element1.style.backgroundColor = 'black';
      }
      if (j === n - 2 - i) {
        element2.style.backgroundColor = 'green';
      }
      if (i === n - 2) {
        element1.style.backgroundColor = 'green';
      }
    }
  }
}

export { bubbleSort };
