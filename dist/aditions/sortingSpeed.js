const speedRange = document.querySelector('#js_speed');
// eslint-disable-next-line import/no-mutable-exports
let speed = 10000 / (parseInt(speedRange === null || speedRange === void 0 ? void 0 : speedRange.value, 10) * 10);
speedRange.addEventListener('input', (e) => {
    const target = e === null || e === void 0 ? void 0 : e.target;
    const value = parseInt(target === null || target === void 0 ? void 0 : target.value, 10);
    speed = 10000 / (value * 10);
    if (value === 0) {
        speed = 1000000000000;
    }
    else if (value === 100) {
        speed = 0.5;
    }
});
export { speed };
