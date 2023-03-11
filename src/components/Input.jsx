import React from "react";
import { useRef, useEffect } from "react";

const Input = () => {
   const divRef = useRef();
   const inputRef = useRef();
   useEffect(() => {
      console.log(inputRef.current);
      // if (divRef.current) divRef.current.style.backgroundColor = "red";
      if (inputRef) inputRef.current.focus();
   }, []);
   // in the mounting process the useRef will be null/undefined, only have value until component mounted
   return (
      <div className="input-div" ref={divRef}>
         <input
            ref={inputRef}
            type="text"
            placeholder="Auto focus input"
            className="inline-block p-5 border border-gray-200 focus:border-blue-300"
         />
      </div>
   );
};

export default Input;
