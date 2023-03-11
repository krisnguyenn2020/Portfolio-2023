import React, { useEffect } from "react";
import axios from "axios";
// https://api.themoviedb.org/3/movie/550?api_key=6977aa63af9f3b1dd2868e11d31f6f0b
//https://api.themoviedb.org/3/search/movie?api_key=6977aa63af9f3b1dd2868e11d31f6f0b&query=""
const MovieSearchApp = () => {
   useEffect(() => {
      async function fetchData() {
         const result = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=6977aa63af9f3b1dd2868e11d31f6f0b&query='hello'`
         );
         console.log(result.data);
      }
      fetchData();
   }, []);
   return (
      <div>
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
         <div className="h-[297px">
            <img src="https://source.unsplash.com/random" alt="" srcset="" />
         </div>
      </div>
   );
};

export default MovieSearchApp;
