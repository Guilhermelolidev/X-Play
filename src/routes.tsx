import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/Home';
import { LibraryPage } from './pages/Library';
import { SettingsPage } from './pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <h1>search</h1>,
      },
      {
        path: '/library',
        element: <LibraryPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
]);
