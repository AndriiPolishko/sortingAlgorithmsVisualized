var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { main } from './main.js';
function sleep(milliseconds) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function bubbleSort() {
  return __awaiter(this, void 0, void 0, function* () {
    const elements = Array.from(main.children);
    const n = elements.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        const element1 = elements[j];
        const element2 = elements[j + 1];
        const size1 = parseInt(
          element1 === null || element1 === void 0
            ? void 0
            : element1.style.height,
          10,
        );
        const size2 = parseInt(
          element2 === null || element2 === void 0
            ? void 0
            : element2.style.height,
          10,
        );
        if (size1 > size2) {
          // eslint-disable-next-line no-await-in-loop
          yield sleep(1);
          const temp =
            element1 === null || element1 === void 0
              ? void 0
              : element1.style.height;
          element1.style.height =
            element2 === null || element2 === void 0
              ? void 0
              : element2.style.height;
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
  });
}
export { bubbleSort };
