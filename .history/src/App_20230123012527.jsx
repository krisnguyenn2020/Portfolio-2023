import "./App.css";
import "./index.css";
import deved from "./public/Dev-removebg-preview.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
// import { CiDark } from "react-icons/ci";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ContactForm from "../components/ContactForm";
import Photo from '../components/Photo';
function App() {
   return (
      <div className="App">
         <div className="main">
            <section className="min-h-screen bg-gradient-to-t from-cyan-400 to-pink-100">
               <nav className="py-10 mb-12 flex justify-between">
                  <div className="flex">
                     {/* <h1 className="text-xl font-burtons cursor-pointer font-bold hover:text-slate-500 ml-5">
                        Kris -Front End Dev
                     </h1> */}
                     <img
                        className="w-14 h-14 mx-5"
                        src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.15752-9/326072965_480302910964849_6231083009035000772_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Lzzahc5b4fcAX9htRMg&_nc_ht=scontent-iad3-1.xx&oh=03_AdTSeaFgkP7cinjtAVNzvZxcTJnZwm75pXpapNc70poAIw&oe=63EF9A0C"
                     ></img>
                     
                     <svg width="65.08" height="29.88" viewBox="0 0 65.08 29.88" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#3a2cb8" stroke-width="0.35mm" fill="#418c73" style="stroke:#3a2cb8;stroke-width:0.35mm;fill:#418c73"><path d="M 9.12 13.36 L 20.88 29.48 L 16.64 29.48 L 6.52 15.84 L 3.6 18.4 L 3.6 29.48 L 0 29.48 L 0 0.92 L 3.6 0.92 L 3.6 15 Q 4.8 13.64 6.04 12.28 L 8.52 9.56 L 16.24 0.92 L 20.44 0.92 L 9.12 13.36 Z M 49.8 28.52 L 49.8 25.32 Q 50.9 25.87 52.399 26.346 A 27.352 27.352 0 0 0 52.9 26.5 Q 54.72 27.04 56.6 27.04 Q 59.28 27.04 60.48 26.18 Q 61.655 25.338 61.679 23.939 A 3.414 3.414 0 0 0 61.68 23.88 Q 61.68 23.08 61.24 22.44 A 2.749 2.749 0 0 0 60.855 22 Q 60.438 21.608 59.76 21.217 A 9.67 9.67 0 0 0 59.66 21.16 Q 58.52 20.52 56.4 19.72 Q 54.32 18.92 52.84 18.12 A 7.915 7.915 0 0 1 51.675 17.359 A 5.766 5.766 0 0 1 50.56 16.2 A 4.107 4.107 0 0 1 49.919 14.761 Q 49.78 14.187 49.763 13.517 A 7.51 7.51 0 0 1 49.76 13.32 Q 49.76 10.715 51.796 9.247 A 6.123 6.123 0 0 1 51.98 9.12 A 8.198 8.198 0 0 1 54.454 8.034 Q 55.944 7.64 57.8 7.64 A 17.927 17.927 0 0 1 60.148 7.788 A 15.043 15.043 0 0 1 61.46 8.02 A 16.112 16.112 0 0 1 64.243 8.905 A 14.696 14.696 0 0 1 64.64 9.08 L 63.44 11.88 Q 62.08 11.32 60.6 10.92 Q 59.12 10.52 57.56 10.52 Q 55.439 10.52 54.301 11.195 A 3.202 3.202 0 0 0 54.26 11.22 A 2.75 2.75 0 0 0 53.635 11.733 A 2.02 2.02 0 0 0 53.12 13.12 A 2.475 2.475 0 0 0 53.248 13.929 A 2.158 2.158 0 0 0 53.64 14.62 A 3.065 3.065 0 0 0 54.08 15.042 Q 54.547 15.414 55.278 15.771 A 10.532 10.532 0 0 0 55.38 15.82 A 31.329 31.329 0 0 0 56.223 16.204 Q 57.205 16.636 58.55 17.165 A 100.059 100.059 0 0 0 58.64 17.2 Q 60.282 17.812 61.535 18.449 A 18.176 18.176 0 0 1 62.12 18.76 A 7.289 7.289 0 0 1 63.303 19.57 A 5.452 5.452 0 0 1 64.32 20.7 Q 65.059 21.809 65.079 23.467 A 7.679 7.679 0 0 1 65.08 23.56 A 6.643 6.643 0 0 1 64.793 25.566 A 5.085 5.085 0 0 1 62.76 28.28 A 8.322 8.322 0 0 1 60.235 29.428 Q 58.603 29.88 56.52 29.88 A 23.463 23.463 0 0 1 54.802 29.821 Q 53.991 29.761 53.283 29.641 A 12.379 12.379 0 0 1 52.66 29.52 Q 51.04 29.16 49.8 28.52 Z M 36.8 7.88 L 36.36 11.12 A 10.637 10.637 0 0 0 35.743 10.998 A 13.478 13.478 0 0 0 35.22 10.92 A 9.724 9.724 0 0 0 34.396 10.848 A 8.247 8.247 0 0 0 34.04 10.84 Q 32.4 10.84 30.96 11.74 A 6.381 6.381 0 0 0 28.855 13.914 A 7.67 7.67 0 0 0 28.66 14.26 A 7.268 7.268 0 0 0 27.911 16.557 A 9.543 9.543 0 0 0 27.8 18.04 L 27.8 29.48 L 24.28 29.48 L 24.28 8.04 L 27.16 8.04 L 27.56 11.96 L 27.72 11.96 Q 28.76 10.2 30.4 8.92 A 6.044 6.044 0 0 1 33.932 7.648 A 7.602 7.602 0 0 1 34.28 7.64 A 13.778 13.778 0 0 1 34.987 7.659 A 17.445 17.445 0 0 1 35.58 7.7 A 11.39 11.39 0 0 1 36.08 7.753 Q 36.351 7.789 36.59 7.835 A 6.286 6.286 0 0 1 36.8 7.88 Z M 40.8 8.04 L 44.32 8.04 L 44.32 29.48 L 40.8 29.48 L 40.8 8.04 Z M 42.6 0 Q 43.4 0 44.02 0.54 A 1.666 1.666 0 0 1 44.499 1.275 Q 44.594 1.552 44.625 1.892 A 3.83 3.83 0 0 1 44.64 2.24 A 3.216 3.216 0 0 1 44.579 2.885 Q 44.501 3.266 44.323 3.556 A 1.666 1.666 0 0 1 44.02 3.92 Q 43.4 4.48 42.6 4.48 A 2.282 2.282 0 0 1 41.813 4.349 A 2.024 2.024 0 0 1 41.12 3.92 Q 40.52 3.36 40.52 2.24 A 3.544 3.544 0 0 1 40.572 1.61 Q 40.697 0.921 41.12 0.54 A 2.089 2.089 0 0 1 42.411 0.007 A 2.726 2.726 0 0 1 42.6 0 Z" vector-effect="non-scaling-stroke"/></g></svg>
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
               <Photo />
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
            </section>
         </div>
      </div>
   );
}

export default App;
