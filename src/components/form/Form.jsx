import React, { useState } from "react";

const Form = () => {
   // const [fullname, setFullName] = useState("");
   // const [message, setMessage] = useState("");
   // const [country, setCountry] = useState("");
   // const handleTextAreaChange = (event) => {
   //    setMessage(event.target.value);
   // };
   // const handleInputChange = (event) => {
   //    console.log(event.target.value);
   //    setFullName(event.target.value);
   // };
   // const handleSelectChange = (event) => {
   //    setCountry(event.target.value);
   // };
   const [values, setValues] = useState({
      fullname: "",
      email: "",
      hobby: false,
   });
   console.log("🚀 ~ file: Form.jsx:22 ~ Form ~ values:", values)

   const handleInputChange = (e) => {
      const type = e.target.type;
      setValues({
         ...values,
         [e.target.name]:
            type === "checkbox" ? e.target.checked : e.target.value,
      });
      // if (type === "checkbox") {
      //    setValues({ ...values, [e.target.name]: e.target.checked });
      // } else {
      //    setValues({ ...values, [e.target.name]: e.target.value });
      // }
      // console.log(e.target.type);
   };
   return (
      <div>
         <div className="flex gap-x-3">
            <input
               type="text"
               name="fullname"
               id=""
               className="max-w-[300px] w-full border p-5 border-gray-100 rounded-lg"
               placeholder="Enter your name"
               onChange={handleInputChange}
            />
            <input
               type="email"
               name="email"
               id=""
               className="max-w-[300px] w-full border p-5 border-gray-100 rounded-lg"
               placeholder="Enter your email"
               onChange={handleInputChange}
            />
            <input
               type="checkbox"
               name="hobby"
               id=""
               onChange={handleInputChange}
            />
         </div>
         {/* <textarea
            name="message"
            id=""
            placeholder="Enter your message"
            className="max-w-[300px] w-full border p-5 border-gray-100 rounded-lg"
            onChange={handleTextAreaChange}
         ></textarea>
         {message}

         <select name="country" onChange={handleSelectChange}>
            <option value="vietnam">VN</option>
            <option value="usa">US</option>
            <option value="japan">Japan</option>
         </select>
         {country} */}
      </div>
   );
};

export default Form;
