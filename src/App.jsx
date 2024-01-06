import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

export const API_URL =  "https://6597a585668d248edf231e3d.mockapi.io/AxiosTask";

function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App