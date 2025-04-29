import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/layout';
import { NotFoundPage } from './404';
import { HomePage } from './home/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/profile',
        // loader: <Loader />,
        lazy: async () => {
          const { ProfilePage } = await import('./profile');
          return { Component: ProfilePage };
        },
      },
      {
        path: '/list',
        lazy: async () => {
          const { ListPage } = await import('./list');
          return { Component: ListPage };
        },
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
