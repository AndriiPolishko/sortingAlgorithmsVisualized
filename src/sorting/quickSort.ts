/* eslint-disable no-param-reassign */

import { main } from '../main.js';
import { sleep } from '../aditions/sleep.js';
import { speed } from '../aditions/sortingSpeed.js';

const swap = async (arr: Element[], i: number, j: number) => {
  const element1 = arr[i] as HTMLElement;
  const element2 = arr[j] as HTMLElement;

  const temp = element1?.style.height;
  element1.style.height = element2?.style.height;
  element2.style.height = temp;
};

const partition = async (arr: Element[], start: number, end: number) => {
  const pivot = arr[end] as HTMLElement;
  let partitionIndex = start - 1;
  for (let i = start; i < end; i++) {
    const element1 = arr[i] as HTMLElement;
    const size1 = parseInt(element1?.style.height, 10);
    const sizePivot = parseInt(pivot?.style.height, 10);
    if (size1 <= sizePivot) {
      partitionIndex++;
      // eslint-disable-next-line no-await-in-loop
      await sleep(speed);
      swap(arr, i, partitionIndex);
    }
  }
  swap(arr, partitionIndex + 1, end);
  return partitionIndex + 1;
};

const quickSort = async (arr: Element[], start: number, end: number) => {
  if (start < end) {
    const partitionIndex = partition(arr, start, end);
    quickSort(arr, start, (await partitionIndex) - 1);
    quickSort(arr, (await partitionIndex) + 1, end);
  }
};

function quickSortEmitter() {
  const arr = Array.from(main.children);
  quickSort(arr, 0, arr.length - 1);
}

export { quickSortEmitter };
