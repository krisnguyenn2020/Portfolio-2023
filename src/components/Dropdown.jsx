import React from "react";
import { useState, useEffect, useRef } from "react";
const Dropdown = () => {
   const [dropdown, setDropdown] = useState(false);
   const dropdownRef = useRef(null);
   const handleClick = () => {
      // console.log("Working");
      setDropdown(!dropdown);
   };
   useEffect(() => {
      function handleClickOutDropDown(e) {
         console.log(e);
         if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            // console.log("🚀 ~ file: Dropdown.jsx:14 ~ handleClickOutDropDown ~ dropdownRef.current", dropdownRef.current)
            // console.log("Click outside dropdown");
            setDropdown(false);
         }
         //  else {
         //     console.log("Click inside dropdown");
         //  }
      }

      document.addEventListener("click", handleClickOutDropDown);
      return () => {
         document.removeEventListener("click", handleClickOutDropDown);
      };
   }, []);
   useRef();
   return (
      <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
         <div
            className="p-5 border rounded-lg w-full cursor-pointer border-gray-200 "
            onClick={handleClick}
         >
            Selected
         </div>
         {dropdown && (
            <div className="absolute top-full w-full left-0 border border-gray-200 bg-white rounded-lg ">
               <div className="p-5 cursor-pointer">Javascript</div>
               <div className="p-5 cursor-pointer">VueJS</div>
               <div className="p-5 cursor-pointer">ReactJS</div>
            </div>
         )}
      </div>
   );
};

export default Dropdown;
