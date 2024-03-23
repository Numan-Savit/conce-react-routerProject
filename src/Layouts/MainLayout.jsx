import { Outlet } from "react-router-dom";
// import Blogs from "../Pages/Blogs";
// import BookMark from "../Pages/BookMark";
// import Home from "../Pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <>
           <div className="h-16">
             <Navbar></Navbar>
            </div> 
            {/* <Home></Home>
            <Blogs></Blogs>
            <BookMark></BookMark> */}

            
              <div className="min-h-[calc(100vh-116px)]">
              <Outlet></Outlet>
              </div>
            

            <Footer></Footer>


           
        </>
    );
};

export default MainLayout;