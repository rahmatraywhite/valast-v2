import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';
import { LanguageProvider } from './utils/LanguageContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);
const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
};

export default App;
