import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
   const [hits, setHits] = useState([]);
   const [query, setQuery] = useState("react");
   const [loading, setLoading] = useState(true);
   const handleFetchData = useRef({});
   handleFetchData.current = async () => {
    setLoading = true;
      try {
         const response = await axios.get(
            `https://hn.algolia.com/api/v1/search?query=${query}`
         );
         //optional chaining, checking if have response.data then will look for hits
         setHits(response.data?.hits || []);
         setLoading(false);
      } catch (err) {
         console.log(err);
      }
      console.log("🚀 ~ file: HackerNews.jsx:18 ~ getTitle ~ hits", hits);
      //  console.log("🚀 ~ file: HackerNews.jsx:18 ~ getTitle ~ setHits", setHits)
   };
   useEffect(() => {
      handleFetchData.current();
      // console.log("Success");
   }, [query]);
   return (
      <div>
         <input
            type="text"
            className="border border-green-500 text-black p-5 my-5"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
         />
         {loading && <p className="my-5">Loading...</p>}
         <hr></hr>
         {!loading &&
            hits.length > 0 &&
            hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
      </div>
   );
};

export default HackerNews;
