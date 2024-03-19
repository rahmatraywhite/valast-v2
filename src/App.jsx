import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'aos/dist/aos.css';
import HomePage from './pages/HomePage';
import { LanguageProvider } from './utils/LanguageContext';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermConditions from './pages/TermConditions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/term-condition',
    element: <TermConditions />,
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
