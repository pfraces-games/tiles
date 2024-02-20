import { createBrowserRouter } from 'react-router-dom';
import Landing from './Landing/Landing.jsx';

const routes = [
  {
    path: '/',
    element: <Landing />
  }
];

export const router = createBrowserRouter(routes);
