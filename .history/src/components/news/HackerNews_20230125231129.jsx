import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
   const [hits, setHits] = useState([]);
   const [query, setQuery] = useState("react");
   const getTitle = async (query) => {
      try {
         const response = await axios.get(
            `https://hn.algolia.com/api/v1/search?query=${query}`
         );
         //optional chaining, checking if have response.data then will look for hits
        setHits(response.data?.hits || []);
      } catch (err) {
         console.log(err);
      }
        console.log("🚀 ~ file: HackerNews.jsx:18 ~ getTitle ~ hits", hits)
        //  console.log("🚀 ~ file: HackerNews.jsx:18 ~ getTitle ~ setHits", setHits)
   };
   useEffect(() => {
     getTitle();
     console.log("Success")
   }, []);
   return (
      <div>
         {hits.length > 0 &&
            hits.map((item, index) => (
               <h3 key={item.title}>{item.title}</h3>
            ))}
      </div>
   );
};

export default HackerNews;