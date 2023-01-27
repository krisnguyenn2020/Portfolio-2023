import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
// import lodash from "lodash";

const HackerNews = () => {
   const [hits, setHits] = useState([]);
   const [query, setQuery] = useState("react");
   const [loading, setLoading] = useState(true);
   const [errorMessage, setErrorMessage] = useState("");
   const handleFetchData = useRef({});
   const [url, setURL] = useState(
      `https://hn.algolia.com/api/v1/search?query=`
   );
   handleFetchData.current = async () => {
      setLoading(true);
      console.log(loading);
      try {
         const response = await axios.get(url);
         //optional chaining, checking if have response.data then will look for hits
         setHits(response.data?.hits || []);
         setLoading(false);
      } catch (err) {
         setLoading(false);
         setErrorMessage(` Error!! ${err}`);
      }
   };
   // const handleUpdateQuery = lodash.debounce((e) => {
   //    setQuery(e.target.value);

   //    // console.log(loading);
   // }, 2000);
   useEffect(() => {
      handleFetchData.current();
      console.log(hits);
   }, [url]);
   return (
      <div className="p-5 bg-white shadow-md my-5 mx-auto rounded-lg w-2/4">
         <h2 className="text-5xl "> Hacker News</h2>
         <div className="flex flex-between gap-5 my-5 mb-5">
            <input
               type="text"
               className="border border-gray-200 block w-full rounded text-black p-5 focus:border-blue-400 transition-all"
               placeholder="Typing your keyword..."
               // defaultValue={query}
               onChange={(e) => {
                  setQuery(e.target.value);
               }}
            />
            <button
               type="submit"
               onClick={() =>
                  setURL(`https://hn.algolia.com/api/v1/search?query=${query}`)
               }
               className="bg-blue-400 rounded-md px-5"
            >
               Fetch
            </button>
         </div>
         {loading && (
            <div className="loading my-10 w-8 h-8 rounded-full border-blue-300 border-4 border-r-4 border-r-transparent animate-spin mx-auto"></div>
         )}
         {!loading && errorMessage && <p>{errorMessage}</p>}
         <div className="flex flex-wrap gap-5">
            {!loading &&
               hits.length > 0 &&
               hits.map((item, index) => {
                  if (!item.title ) return null;
                  return (

             
                       <a href={item.url} target="_blank">

                                <h3
                        key={item.index}
                        className="p-3 rounded-md bg-gray-200"
                     >{item.title}</h3>
                       </a> 
                  
                  );
               })}
         </div>
      </div>
   );
};

export default HackerNews;
