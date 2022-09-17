const speedRange = document.querySelector('#js_speed') as HTMLInputElement;

// eslint-disable-next-line import/no-mutable-exports
let speed = 10000 / (parseInt(speedRange?.value, 10) * 10);

speedRange.addEventListener('input', (e) => {
  const target = e?.target as HTMLInputElement;
  const value = parseInt(target?.value, 10);
  speed = 10000 / (value * 10);

  if (value === 0) {
    speed = 1000000000000;
  } else if (value === 100) {
    speed = 0.5;
  }
});

export { speed };
