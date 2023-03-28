import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import PageProvider from './context/pageContext';
import MainPage from './pages/MainPage';
import Result from './pages/Result';
import Thumbnail from './pages/Thumbnail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Thumbnail />,
  },
  {
    path: 'pages',
    element: <MainPage />,
  },
  {
    path: '/result',
    element: <Result />,
  },
]);
function QuizApp({ children }) {
  return (
    <PageProvider>
      <RouterProvider router={router}>{children}</RouterProvider>
    </PageProvider>
  );
}

export default QuizApp;
