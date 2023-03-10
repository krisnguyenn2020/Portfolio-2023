import React from "react";
import { useEffect } from "react";

const Header = () => {
   useEffect(() => {
      const handleFixedHeader = () => {
         const header = document.getElementById("header");
         if (window.scrollY > 300) {
            header.classList.add("fixed");
         }
         else {
          header.classList.remove("fixed");
         }
         console.log("Fixed");
      };
      window.addEventListener("scroll", handleFixedHeader);

      return () => {
         window.removeEventListener("scroll", handleFixedHeader);
      };
   }, []);
   return <div className="p-5 bg-slate-600 w-full" id="header"></div>;
};

export default Header;
