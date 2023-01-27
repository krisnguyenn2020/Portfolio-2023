import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
   const [hits, setHits] = useState([]);
   const [query, setQuery] = useState("react");
   const [loading, setLoading] = useState(true);
   const [errorMessage, setErrorMessage] = useState("");
   const handleFetchData = useRef({});
   handleFetchData.current = async () => {
      setLoading(true);
      try {
         const response = await axios.get(
            `https://hn.algolia.com/api/v1/search?query=${query}`
         );
         //optional chaining, checking if have response.data then will look for hits
         setLoading(false);
         setHits(response.data?.hits || []);
      } catch (err) {
         setLoading(false);
         setErrorMessage(` Error!! ${err}`);
      }
   };
   const handleUpdateQuery = lodash.debounce((e) => {
      setQuery(e.target.value);
   }, 10000);
   useEffect(() => {
      handleFetchData.current();
      // console.log("Success");
   }, [query]);
   return (
      <div className="p-5 bg-white shadow-md my-5 mx-auto rounded-lg w-2/4">
         <input
            type="text"
            className="border border-gray-200 block w-full rounded text-black p-5 my-5 mb-5 focus:border-blue-400 transition-all"
            placeholder="Typing your keyword..."
            defaultValue={query}
            onChange={handleUpdateQuery}
         />
         {loading && (
            <div className="my-10 w-8 h-8 rounded-full border-blue-300 border-4 border-r-4 border-r-transparent animate-spin mx-auto"></div>
         )}
         {!loading && errorMessage && <p>{errorMessage}</p>}
         <div className="flex flex-wrap gap-5">
            {!loading &&
               hits.length > 0 &&
               hits.map((item, index) => (
                  <h3 key={item.title} className="p-3 rounded-md bg-gray-200">
                     {item.title}
                  </h3>
               ))}
         </div>
      </div>
   );
};

export default HackerNews;
