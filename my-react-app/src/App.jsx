import { Outlet, RouterProvider } from 'react-router';
import './App.css';
import { router } from './pages';

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
