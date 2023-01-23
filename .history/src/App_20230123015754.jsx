import "./App.css";
import "./index.css";
import deved from "./public/Dev-removebg-preview.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
// import { CiDark } from "react-icons/ci";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ContactForm from "../components/ContactForm";
import Photo from "../components/Photo";
function App() {
   return (
      <div className="App">
         <div className="relative bg-slate-500">
         Hello
            {/* <section className="min-h-screen bg-gradient-to-t from-cyan-400 to-pink-100">
               <nav className="py-10 mb-12 flex justify-between">
                  <div className="flex">
                     <h1 className="text-xl font-burtons cursor-pointer font-bold hover:text-slate-500 ml-5">
                        Kris -Front End Dev
                     </h1>
                     <img
                        className="w-14 h-14 mx-5"
                        src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/326072965_480302910964849_6231083009035000772_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Lzzahc5b4fcAX9htRMg&_nc_ht=scontent-iad3-1.xx&oh=03_AdTSeaFgkP7cinjtAVNzvZxcTJnZwm75pXpapNc70poAIw&oe=63EF9A0C"
                     ></img>
                  </div>

                  <ul className="flex items-center">
                     <li>
                        <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                     </li>
                     <li>
                        <a
                           className="bg-gradient-to-r from-cyan-500 to-amber-200 text-white px-4 py-2 rounded-md ml-7 mr-6"
                           href="#"
                        >
                           Resume
                        </a>
                     </li>
                  </ul>
               </nav>
               <div id="introduction" className="text-center p-10">
                  <h2 className="text-6xl py-2 text-cyan-400 font-medium">
                     Kris Nguyen
                  </h2>
                  <h3 className="text-3xl py-2">Front-End Developer</h3>
                  <p className="py-5 m-auto max-w-md text-2xl leading-8 text-gray-800">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Nam et qui excepturi, voluptatum a, eum quae, labore
                     reprehenderit repellendus distinctio tenetur quod? Nesciunt
                     facere non magnam quos sit et harum?
                  </p>
               </div>
               <div id="social" className="flex text-5xl gap-16 justify-center">
                  <AiFillGithub />
                  <AiFillLinkedin />
               </div>
               <div className="relative mx-auto bg-gradient-to-b from-pink-300 to-yellow-300 rounded-full w-80 h-80 mt-20">
                  <img src={deved} alt="" className="" />
               </div>

               <section className="my-20" id="contact">
                  <div className="text-center">
                     <h2 className="text-3xl">Send me a message!</h2>
                     <p>
                        Got a question or proposal, or just want to say hello?
                        Go ahead.
                     </p>
                     <ContactForm />
                     Designed and Developed by Kris Nguyen
                  </div>
               </section>
            </section> */}
          <div
                        className="h-[400px] w-[400px] p-3 bg-white shadow-md rounded-lg"
                        key={item.id}
                     >
                        <img
                           className="w-full h-full object-cover rounded-lg"
                           src={item.download_url}
                           alt="item.author"
                        />
                     </div>
               <Photo />
            
         </div>
      </div>
   );
}

export default App;
