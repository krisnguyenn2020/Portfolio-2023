import React, { useState, useEffect } from "react";
import axios from "axios";
// https://api.themoviedb.org/3/movie/550?api_key=6977aa63af9f3b1dd2868e11d31f6f0b
//https://api.themoviedb.org/3/search/movie?api_key=6977aa63af9f3b1dd2868e11d31f6f0b&query=""
const MovieSearchApp = () => {
   const [movie, setMovie] = useState([]);
   const [query, setQuery] = useState("");
   const queryDebounce = useDebounce(query, 500);
   useEffect(() => {
      async function fetchData() {
         const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=6977aa63af9f3b1dd2868e11d31f6f0b&query='${queryDebounce}'`
         );
         console.log(response.data.results);
         if (response.data.results) {
            setMovie(response.data.results);
         }
      }
      fetchData();
   }, []);
   return (
      <div className="p-10">
         <div className="w-full max-w-[500px] mx-auto mb-20">
            <input
               type="text"
               name=""
               id=""
               placeholder="Search movie..."
               className="w-full p-5 border border-purple-400 rounded-lg shadow-[0px_0px_0px_3px_rgba(125,106,255,0.2)] "
            />
         </div>
         <div className="grid grid-cols-3 gap-10">
            {" "}
            <MovieItem></MovieItem>
            <MovieItem></MovieItem>
            <MovieItem></MovieItem>
         </div>
      </div>
   );
};
const MovieItem = () => {
   return (
      <div className="bg-white p-3 rounded-2xl shadow-sm">
         <div className="h-[297px]">
            <img
               className="object-cover rounded-lg h-full w-full"
               src="https://source.unsplash.com/random"
               alt=""
               srcset=""
            />
         </div>
         <div className="p-8">
            <h3 className="text-lg text-black font-semibold mb-4">Hotel....</h3>
            <p className="text-[#999] text-sm mb-6">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Voluptates, recusandae autem nobis ullam dolore unde in tempora
               maiores esse cum enim veritatis rem incidunt aperiam tempore
               reiciendis quis, assumenda laborum!
            </p>
            <div className="flex items-center gap-x-3 mt-auto">
               <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
                     stroke="#FFB86C"
                     strokeWidth="1.5"
                  />
               </svg>
               <span className="text-sm font-semibold">6</span>
            </div>
         </div>
      </div>
   );
};

export default MovieSearchApp;
