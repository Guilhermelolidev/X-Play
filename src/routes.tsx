import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/Home';
import { LibraryPage } from './pages/Library';
import { SearchPage } from './pages/Search';
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
            element: <SearchPage />,
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
