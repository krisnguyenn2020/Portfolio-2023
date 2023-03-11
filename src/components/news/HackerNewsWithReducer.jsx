import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import { useReducer } from "react";
// import lodash from "lodash";
const initialState = {
   hits: [],
   query: "",
   loading: true,
   errorMessage: "",
   url: `https://hn.algolia.com/api/v1/search?query=''`,
};
// Xử lý callback dependency trong useEffect với ref
const hackerNewsReducer = (state, action) => {
   switch (action.type) {
      case "SET_DATA": {
         return { ...state, hits: action.payload };
      }
      case "SET_LOADING": {
         return { ...state, loading: action.payload };
      }
      case "SET_ERROR": {
         return { ...state, errorMessage: action.payload };
      }
      case "SET_QUERY": {
         return { ...state, query: action.payload };
      }
      case "SET_URL": {
         return { ...state, url: action.payload };
      }
      default:
         break;
   }
};

const HackerNewsWithReducer = () => {
   const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
   const handleFetchData = useRef({});
   handleFetchData.current = async () => {
      dispatch({
         type: "SET_LOADING",
         payload: true,
      });
      // console.log("Working");
      try {
         const response = await axios.get(state.url);

         dispatch({
            type: "SET_DATA",
            payload: response.data?.hits || [],
         });
         dispatch({
            type: "SET_LOADING",
            payload: false,
         });
         console.log(state.hits);
      } catch (err) {
         dispatch({
            type: "SET_LOADING",
            payload: false,
         });
         dispatch({
            type: "SET_ERROR",
            payload: `The error message is : ${err}`,
         });
      }
   };

   useEffect(() => {
      handleFetchData.current();
   }, [state.url]);
   return (
      <div className="p-5 bg-white shadow-md my-5 mx-auto rounded-lg w-2/4">
         <h2 className="text-5xl "> Hacker News</h2>
         <div className="flex flex-between gap-5 my-5 mb-5">
            <input
               type="text"
               className="border border-gray-200 block w-full rounded text-black p-5 focus:border-blue-400 transition-all"
               placeholder="Typing your keyword..."
               defaultValue={state.query}
               onChange={(e) =>
                  dispatch({
                     type: "SET_QUERY",
                     payload: e.target.value,
                  })
               }
            />
            <button
               onClick={() =>
                  dispatch({
                     type: "SET_URL",
                     payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
                  })
               }
               disabled={state.loading}
               className="bg-blue-400 rounded-md px-5 flex-shrink-0"
               style={{
                  opacity: state.loading ? "0.25" : 1,
               }}
            >
               Fetch
            </button>
         </div>
         {state.loading && (
            <div className="loading my-10 w-8 h-8 rounded-full border-blue-300 border-4 border-r-4 border-r-transparent animate-spin mx-auto"></div>
         )}
         {!state.loading && state.errorMessage && <p>{state.errorMessage}</p>}
         <div className="flex flex-wrap gap-5">
            {!state.loading &&
               state.hits.length > 0 &&
               state.hits.map((item, index) => {
                  if (!item.title) return null;
                  return (
                     <h3
                        key={item.index}
                        className="p-3 rounded-md bg-gray-200 hover:bg-orange-200 cursor-pointer "
                     >
                        <a href={item.url} target="_blank" className=" ">
                           {item.title}
                        </a>
                     </h3>
                  );
               })}
         </div>
      </div>
   );
};

export default HackerNewsWithReducer;
