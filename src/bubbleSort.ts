import { main } from './main.js';

function sleep(milliseconds: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// AUTHOR COMMENT: speed check up to line 23
const speedRange = document.querySelector('#js_speed') as HTMLInputElement;
// eslint-disable-next-line import/no-mutable-exports
let speed = 10000 / (parseInt(speedRange?.value, 10) * 10);

speedRange.addEventListener('input', (e) => {
  const target = e?.target as HTMLInputElement;
  const value = parseInt(target?.value, 10);
  speed = 10000 / (value * 10);

  if (value === 0) {
    speed = 1000;
  } else if (value === 100) {
    speed = 0.5;
  }
});

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

        const temp = element1?.style.height;
        element1.style.height = element2?.style.height;
        element2.style.height = temp;

        element2.style.backgroundColor = 'red';
        element1.style.backgroundColor = 'black';
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
