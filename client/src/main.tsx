import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom';
import Error from './pages/Error.tsx';
import './styles/index.sass';
import Greeting from './pages/Greeting.tsx';
import About from './pages/About.tsx';
import Schedule from './pages/Schedule.tsx';
import Layout from './Layout.tsx';
import Useful from './pages/Useful.tsx';
import Plans from './pages/Plans.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Greeting/></Layout>,
    errorElement: <Layout><Error/></Layout>
  },
  {
    path: '/about',
    element: <Layout><About/></Layout>
  },
  {
    path: '/schedule',
    element: <Layout><Schedule/></Layout>
  },
  {
    path: '/useful',
    element: <Layout><Useful/></Layout>
  },
  {
    path: '/plans',
    element: <Layout><Plans/></Layout>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
