function generateHeights(max: number, min: number, n: number) {
  const heights: Array<string> = [];
  for (let i = 0; i < n; i++) {
    const height: string = `${Math.floor(Math.random() * max + min)}vh`;
    heights.push(height);
  }
  return heights;
}

export { generateHeights };
