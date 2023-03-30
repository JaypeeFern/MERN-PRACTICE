import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
/* ------------------------------------ X ----------------------------------- */
import IndexLayout from './Layouts/IndexLayout';
/* --------------------------------- Routes --------------------------------- */
import Dashboard from './Pages/Dashboard';
import Login, { action as loginAction } from './Pages/Login';
import Register, { action as registerAction } from './Pages/Register';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<IndexLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" action={loginAction} element={<Login />} />
        <Route path="register" action={registerAction} element={<Register />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
