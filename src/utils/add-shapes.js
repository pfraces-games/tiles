import { posToIndex } from './matrix.js';

export const addShapes = (cells, cols, rows) => {
  const shapes = [];

  const findShape = (cell) =>
    shapes.find((shape) => shape.cells.includes(cell));

  const createShape = (cells) => {
    shapes.push({ id: shapes.length, cells });
  };

  const getAdjacentCells = (cell) => {
    const adjacentCells = [];

    if (cell.y > 0) {
      const topCell = cells[posToIndex(cols, { x: cell.x, y: cell.y - 1 })];
      adjacentCells.push(topCell);
    }

    if (cell.x > 0) {
      const leftCell = cells[posToIndex(cols, { x: cell.x - 1, y: cell.y })];
      adjacentCells.push(leftCell);
    }

    if (cell.y < rows - 1) {
      const bottomCell = cells[posToIndex(cols, { x: cell.x, y: cell.y + 1 })];
      adjacentCells.push(bottomCell);
    }

    if (cell.x < cols - 1) {
      const rightCell = cells[posToIndex(cols, { x: cell.x + 1, y: cell.y })];
      adjacentCells.push(rightCell);
    }

    return adjacentCells;
  };

  const getAdjacentShapeCells = (cell) => {
    return getAdjacentCells(cell).filter(
      (adjacentCell) => adjacentCell.color === cell.color
    );
  };

  const getShapeCells = (cell, shapeCells = []) => {
    if (shapeCells.includes(cell)) {
      return shapeCells;
    }

    shapeCells.push(cell);

    getAdjacentShapeCells(cell).forEach((adjacentShapeCell) => {
      getShapeCells(adjacentShapeCell, shapeCells);
    });

    return shapeCells;
  };

  cells.forEach((cell) => {
    if (findShape(cell)) {
      return;
    }

    createShape(getShapeCells(cell));
  });

  const shapedCells = cells.map((cell) => ({
    ...cell,
    shapeId: findShape(cell).id
  }));

  return { cells: shapedCells, shapes };
};
