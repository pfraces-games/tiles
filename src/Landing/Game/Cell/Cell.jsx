import clsx from 'clsx';
import { CellModule } from './Cell.module.css';

export default function Cell({ cell, onClick }) {
  if (cell.isEmpty) {
    return <div className={CellModule}></div>;
  }

  return <div className={clsx([CellModule, cell.color])} onClick={onClick} />;
}
