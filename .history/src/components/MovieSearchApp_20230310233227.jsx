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
   return <div>
    <div className="w-full max-w-[500px] mx-auto">
      <input type="text" name="" id="" placeholder="Search movie..." className="w-full" />
    </div>
   </div>;
};

export default MovieSearchApp;
