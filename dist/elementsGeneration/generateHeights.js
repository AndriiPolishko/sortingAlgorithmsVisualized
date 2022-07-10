function generateHeights(max, min, n) {
    const heights = [];
    for (let i = 0; i < n; i++) {
        const height = `${Math.floor(Math.random() * max + min)}vh`;
        heights.push(height);
    }
    return heights;
}
export { generateHeights };
