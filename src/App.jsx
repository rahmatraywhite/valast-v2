import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
