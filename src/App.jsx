import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import { AppModule } from './App.module.css';

export default function App() {
  return (
    <div className={AppModule}>
      <RouterProvider router={router} />
    </div>
  );
}
