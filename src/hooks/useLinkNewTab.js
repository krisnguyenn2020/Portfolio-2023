import { useState, useRef, useEffect } from "react";
export default function useLinkNewTab() {
   const contentRef = useRef(null);
   useEffect(() => {
      if (contentRef.current) {
         const links = contentRef.current.querySelectorAll("a");
         link.length > 0 &&
            links.forEach((item) => item.setAttribute("target", "_blank"));
      }
   }, []);
   return {
    contentRef,
   };
}
