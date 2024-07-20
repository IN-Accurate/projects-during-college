import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Sem from './components/Sem';
import Subject from './components/Subject';
import Admin from './components/Admin';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/semester/:id',
    element: <Sem />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/subject/:id',
    element: <Subject />,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>Something went wrong</div>,
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
