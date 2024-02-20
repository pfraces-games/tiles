import { createCell } from './create-cell.js';
import { indexToPos } from './matrix.js';
import { addShapes } from './add-shapes.js';

export const init = ({ cols, rows }) => {
  const cells = Array.from({ length: cols * rows }, (_, index) => ({
    ...createCell(),
    ...indexToPos(cols, index)
  }));

  return addShapes(cells, cols, rows);
};
