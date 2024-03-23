import { Link } from "react-router-dom";


const Hero = () => {
    return (
           <div className="hero">
     <div className="hero-content text-center">
       <div className="max-w-md">
         <h1 className="text-4xl font-bold">Welcome to <span className="text-purple-800">ByteBlaze</span></h1>
         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
         
         <div className="flex gap-4 justify-center">

            <div className="bg-blue-800 p-2 rounded-lg text-yellow-100">
               <Link to = '/blogs'>Read Blogs</Link>
            </div>

            <div className="bg-blue-800 p-2 rounded-lg text-yellow-100">
              <Link to = '/bookmarks'>Bookmarks</Link>
            </div>

         </div>
       </div>
     </div>
   </div>
    );
};

export default Hero;