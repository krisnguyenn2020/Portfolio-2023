import React, { useEffect } from "react";
// import axios from "axios";
// https://api.themoviedb.org/3/movie/550?api_key=6977aa63af9f3b1dd2868e11d31f6f0b
//https://api.themoviedb.org/3/search/movie?api_key=6977aa63af9f3b1dd2868e11d31f6f0b&query=""
const MovieSearchApp = () => {
   useEffect(() => {
      async function fetchData() {
         const data = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=6977aa63af9f3b1dd2868e11d31f6f0b&query='hello'`
         );
         console.log(data);
      }
   }, []);
   return <div></div>;
};

export default MovieSearchApp;
