import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './features/auth/views/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);

export default function AppRedirect() {
  return <RouterProvider router={router} />;
}
