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
         setHits(response.data?.hits || []);
         setLoading(false);
      } catch (err) {
         setLoading(false);
         setErrorMessage(` Error!! ${err}`)
      }
   };
   const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
   }, 500);
   useEffect(() => {
      handleFetchData.current();
      // console.log("Success");
   }, [query]);
   return (
      <div className="shadow-md mt-5 m-auto rounded-lg w-2/4">
         <input
            type="text"
            className="border border-green-500 block w-full rounded text-black p-5 my-5"
            defaultValue={query}
            onChange={handleUpdateQuery}
         />
         {loading && (
            <div className="my-5 w-8 h-8 rounded-full border-blue-300 border-4 border-r-4 border-r-transparent animate-spin"></div>
         )}
         {!loading && errorMessage && <p>{errorMessage}</p>}
         <hr></hr>
         {!loading &&
            hits.length > 0 &&
            hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
      </div>
   );
};

export default HackerNews;
