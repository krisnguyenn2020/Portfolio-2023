import "./App.css";
import "./index.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
// import { CiDark } from "react-icons/ci";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
function App() {
   return (
      <div className="App">
         <div className="main px-10">
            <section className="min-h-screen">
               <nav className="py-10 mb-12 flex justify-between">
                  <h1 className="text-xl font-burtons">Kris - Front End Dev</h1>
                  <ul className="flex items-center">
                     <li>
                        <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                     </li>
                     <li>
                        <a
                           className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-7"
                           href="#"
                        >
                           Resume
                        </a>
                     </li>
                  </ul>
               </nav>
               <div id="introduction" className="text-center p-10">
                  <h2 className="text-5xl py-2 text-teal-600 font-medium">Kris Nguyen</h2>
                  <h3 className="text-2xl py-2">Front-End Developer</h3>
                  <p className="py-5 leading-8 text-gray-800">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Nam et qui excepturi, voluptatum a, eum quae, labore
                     reprehenderit repellendus distinctio tenetur quod? Nesciunt
                     facere non magnam quos sit et harum?
                  </p>
               </div>
               <div id="social" className="flex text-5xl gap-16 justify-center">
                  <AiFillTwitterCircle />
                  <AiFillLinkedin />
               </div>
            </section>
         </div>
      </div>
   );
}

export default App;
