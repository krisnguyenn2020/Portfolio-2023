import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
   const [hits, setHits] = useState([]);
   const getTitle = async () => {
      try {
         const response = await axios.get(
            `https://hn.algolia.com/api/v1/search?query=react`
         );
         setHits(response.data?.hits || []);
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      getTitle();
   }, []);
   return (
      <div>
         {hits.length > 0 &&
            hits.map((item, index) => {
               <h3 key={item.title}>{item.title}</h3>;
            })}
      </div>
   );
};

export default HackerNews;
