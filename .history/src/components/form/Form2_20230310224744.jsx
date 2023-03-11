import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
   const { values, handleChange } = useHandleChange({
      fullName: "",
      email: "",
      hobby: false,
   });
   console.log("🚀 ~ file: Form2.jsx:10 ~ Form ~ values:", values)

   return (
      <div>
         <form className="flex gap-x-3">
            <input
               type="text"
               name="fullName"
               id=""
               className="max-w-[300px] w-full border p-5 border-gray-100 rounded-lg"
               placeholder="Enter your name"
               onChange={handleChange}
            />
            <input
               type="email"
               name="email"
               id=""
               className="max-w-[300px] w-full border p-5 border-gray-100 rounded-lg"
               placeholder="Enter your email"
               onChange={handleChange}
            />
            <input type="checkbox" name="hobby" id="" onChange={handleChange} />
            <button>Submit</button>
         </form>
      </div>
   );
};

export default Form;
