export const indexToPos = (cols, index) => ({
  x: index % cols,
  y: Math.floor(index / cols)
});

export const posToIndex = (cols, pos) => pos.y * cols + pos.x;
