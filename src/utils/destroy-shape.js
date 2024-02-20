import { createCell } from './create-cell.js';
import { indexToPos, posToIndex } from './matrix.js';
import { addShapes } from './add-shapes.js';
import { settings } from '@/settings.js';

const emptyCell = (index) => ({
  ...createCell({ isEmpty: true }),
  ...indexToPos(settings.cols, index)
});

const cellsToGravityMatrix = (cells) => {
  const gravityMatrix = Array(settings.cols)
    .fill(null)
    .map(() => Array(settings.rows).fill(null));

  cells.forEach((cell) => {
    gravityMatrix[cell.x][cell.y] = cell;
  });

  return gravityMatrix;
};

const gravityMatrixToCells = (gravityMatrix) => {
  const cells = Array(settings.cols * settings.rows).fill(null);

  gravityMatrix.forEach((col) => {
    col.forEach((cell) => {
      cells[posToIndex(settings.cols, cell)] = cell;
    });
  });

  return cells.map((cell, index) => cell || emptyCell(index));
};

const applyGravity = (gravityMatrix) =>
  gravityMatrix.map((col) =>
    col
      .filter((cell) => cell !== null)
      .map((cell, rowIndex, col) => ({
        ...cell,
        y: settings.rows - col.length + rowIndex
      }))
  );

const fillEmptySpace = (gravityMatrix) =>
  gravityMatrix.map((col, colIndex) => [
    ...Array.from({ length: settings.rows - col.length }, (_, rowIndex) => ({
      ...createCell(),
      x: colIndex,
      y: rowIndex
    })),
    ...col
  ]);

export const destroyShape = (cells, target) => {
  const nextCells = gravityMatrixToCells(
    fillEmptySpace(
      applyGravity(
        cellsToGravityMatrix(
          cells.filter((cell) => cell.shapeId !== target.shapeId)
        )
      )
    )
  );

  return addShapes(nextCells, settings.cols, settings.rows);
};
