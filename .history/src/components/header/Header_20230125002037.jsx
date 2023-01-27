import React from 'react';
import { useEffect } from 'react';

const Header = () => {
  useEffectEffect(() => {
    const handleFixedHeader = () => {
      console.log("Fixed");


    };
    window.addEventListener("scroll", handleFixedHeader)
  }, [])
  return (
    <div className='p-5 bg-slate-600 w-full'>
      
    </div>
  );
};

export default Header;