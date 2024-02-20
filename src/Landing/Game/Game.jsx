import { useState } from 'react';
import { settings } from '@/settings.js';
import { init } from '@/utils/init.js';
import { destroyShape } from '@/utils/destroy-shape.js';
import Cell from './Cell/Cell.jsx';
import { GameModule } from './Game.module.css';

export default function Game() {
  const [state, setState] = useState(
    init({ cols: settings.cols, rows: settings.rows })
  );

  const setCells = (nextCells) => {
    return setState((state) => ({ ...state, cells: nextCells }));
  };

  const setShapes = (nextShapes) => {
    return setState((state) => ({ ...state, shapes: nextShapes }));
  };

  return (
    <div className={GameModule}>
      {state.cells.map((cell) => (
        <Cell
          key={cell.id}
          cell={cell}
          onClick={() => {
            if (
              state.shapes[cell.shapeId].cells.length < settings.minShapeLength
            ) {
              return;
            }

            const { cells: nextCells, shapes: nextShapes } = destroyShape(
              state.cells,
              cell
            );

            setCells(nextCells);
            setShapes(nextShapes);
          }}
        />
      ))}
    </div>
  );
}
