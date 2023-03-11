import React from "react";
import { useRef,useState, useEffect } from "react";
const Stopwatch = () => {
   const timerRef = useRef(null);
   const [count, setCount] = useState(0);
   const handleStart = () => {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => {
         setCount((count) => count + 1);
      }, 1000);
   };
   const handleStop = () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
   };
   useEffect(() => {
      return () => clearInterval(timerRef.current);
      console.log("hehe");
   }, []);
   return (
      <div>
         <h3>Timer: {count}s</h3>

         <div className="flex gap-4">
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
         </div>
      </div>
   );
};

export default Stopwatch;
