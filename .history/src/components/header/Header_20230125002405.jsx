import React from "react";
import { useEffect } from "react";

const Header = () => {
   useEffectEffect(() => {
      const handleFixedHeader = () => {
        const header = document.getElementById("header");
        if (window.scrollY > 100) 
          header.classList.add("fixed");
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
