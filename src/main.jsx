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
import Blog from './Pages/Blog.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author.jsx';
import { Toaster } from 'react-hot-toast'



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
        loader: () => fetch("https://dev.to/api/articles?per page=20&top=7"),
      },

      {
        path:'/blog/:id',
        element: <Blog></Blog>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index:true,
            element:<Content></Content>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path:'author',
            element:<Author></Author>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
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
     {/* <Toaster /> */}
     <Toaster/>

    
    <RouterProvider router={router} />
  </React.StrictMode>,
)

