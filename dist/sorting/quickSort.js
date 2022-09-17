/* eslint-disable no-param-reassign */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { main } from '../main.js';
import { sleep } from '../aditions/sleep.js';
import { speed } from '../aditions/sortingSpeed.js';
const swap = (arr, i, j) => __awaiter(void 0, void 0, void 0, function* () {
    const element1 = arr[i];
    const element2 = arr[j];
    const temp = element1 === null || element1 === void 0 ? void 0 : element1.style.height;
    element1.style.height = element2 === null || element2 === void 0 ? void 0 : element2.style.height;
    element2.style.height = temp;
});
const partition = (arr, start, end) => __awaiter(void 0, void 0, void 0, function* () {
    const pivot = arr[end];
    let partitionIndex = start - 1;
    for (let i = start; i < end; i++) {
        const element1 = arr[i];
        const size1 = parseInt(element1 === null || element1 === void 0 ? void 0 : element1.style.height, 10);
        const sizePivot = parseInt(pivot === null || pivot === void 0 ? void 0 : pivot.style.height, 10);
        if (size1 <= sizePivot) {
            partitionIndex++;
            // eslint-disable-next-line no-await-in-loop
            yield sleep(speed);
            swap(arr, i, partitionIndex);
        }
    }
    swap(arr, partitionIndex + 1, end);
    return partitionIndex + 1;
});
const quickSort = (arr, start, end) => __awaiter(void 0, void 0, void 0, function* () {
    if (start < end) {
        const partitionIndex = partition(arr, start, end);
        quickSort(arr, start, (yield partitionIndex) - 1);
        quickSort(arr, (yield partitionIndex) + 1, end);
    }
});
function quickSortEmitter() {
    const arr = Array.from(main.children);
    quickSort(arr, 0, arr.length - 1);
}
export { quickSortEmitter };
