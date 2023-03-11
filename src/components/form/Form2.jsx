import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
   const { values, handleChange } = useHandleChange({
      fullName: "",
      email: "",
      hobby: false,
   });
   const [nameError, setNameError] = useState("");

   //  console.log("🚀 ~ file: Form2.jsx:10 ~ Form ~ values:", values)
   const handleSubmitForm = (e) => {
      e.preventDefault();
      if (values.fullName === "") {
        setNameError("Your fullname is empty!!");
      } else {
        setNameError("");
      }
   };
   return (
      <div>
         <form className="p-3 flex gap-x-3" autoComplete="off">
            <div className="flex flex-col gap-y-3">
              <input
                 type="text"
                 name="fullName"
                 id=""
                 className="max-w-[300px] w-full border p-5 border-gray-100 rounded-lg"
                 placeholder="Enter your name"
                 onChange={handleChange}
              />
              {nameError}
            </div>
            <input
               type="email"
               name="email"
               id=""
               className="max-w-[300px] w-full border p-5 border-gray-100 rounded-lg"
               placeholder="Enter your email"
               onChange={handleChange}
            />
            {/* <input type="checkbox" name="hobby" id="" onChange={handleChange} /> */}
            <button
               type="submit"
               className="p-3 bg-blue-400 rounded-lg text-white"
               onClick={handleSubmitForm}
            >
               Submit
            </button>
         </form>
      </div>
   );
};

export default Form;
