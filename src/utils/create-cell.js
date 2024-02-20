import { uid } from './uid.js';
import { randomColor } from './random-color.js';

export const createCell = ({ isEmpty = false } = {}) => ({
  id: uid(),
  isEmpty,
  color: isEmpty ? null : randomColor()
});
