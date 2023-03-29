import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
/* ------------------------------------ X ----------------------------------- */
import IndexLayout from './Layouts/IndexLayout'


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<IndexLayout/>}>
      <Route index element={<h1>Home</h1>}/>
      <Route path='about' element={<h1>About</h1>}/>
      <Route path='contact' element={<h1>Contact</h1>}/>
    </Route> 
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
