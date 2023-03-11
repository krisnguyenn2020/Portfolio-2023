import React from "react";
import { useRef, useState, useLayoutEffect } from "react";
const TextAreaAutoResize = () => {
   const [text, setText] = useState("Demo");
   const [textAreaHeight, setTextAreaHeight] = useState("auto");
   //  const [parentHeight, setParentHeight] = useState("auto");
   const textAreaRef = useRef(null);

   const handleChange = (event) => {
      setTextAreaHeight("auto");
      // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
      setText(event.target.value);
   };
   useLayoutEffect(() => {
      setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`);
      // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
   }, [text]);

   return (
      <div className="p-5">
         <textarea
            placeholder="Please enter your content..."
            className="overflow-hidden transition-all resize-none focus:border-blue-200 shadow-md p-5 border rounded-md border-gray-100 max-w-[400px] w-full loading-normal"
            value={text}
            ref={textAreaRef}
            style={{
               height: textAreaHeight,
            }}
            onChange={handleChange}
         ></textarea>
      </div>
   );
};

export default TextAreaAutoResize;
