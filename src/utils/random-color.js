const colors = ['blue', 'green', 'yellow', 'red'];

export const randomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
