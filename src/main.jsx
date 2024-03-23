import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import BookMark from './Pages/BookMark.jsx';
import MainLayout from './Layouts/MainLayout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,

    children:[
     
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/bookmarks',
        element: <BookMark></BookMark>,
      },
    ],
  },

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
