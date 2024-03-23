// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Blogs from "./Pages/Blogs"
import BookMark from "./Pages/BookMark"
import Home from "./Pages/Home"
// import Navbar from "./components/Navbar"

function App() {


  return (
    <>
      {/* <Navbar></Navbar> */}
      <Home></Home>
      <Blogs></Blogs>
      <BookMark></BookMark>
    </>
  )
}

export default App
