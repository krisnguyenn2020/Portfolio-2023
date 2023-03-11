import ContactForm from "./components/ContactForm";
import Photo from "./components/Photo";
import Counter from "./components/Counter/Counter";
import Header from "./components/header/Header";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
import Introduction from "./components/introduction/Introduction";
import { useRef, useEffect, useState } from "react";
import Stopwatch from "./components/Stopwatch";
import Form from "./components/form/Form";
import TextAreaAutoResize from "./components/TextAreaAutoResize";
import Dropdown from "./components/Dropdown";
import HackerNewsWithHooks from "./components/news/HackerNewsWithHook";
// import Input from "/components/Input";
import Form2 from "./components/form/Form2";


function App() {
   return (
      <div className="App">
         {/* <Introduction></Introduction> */}
         {/* <ContactForm /> */}
         {/* <Photo /> */}
         {/* <Stopwatch></Stopwatch> */}
         {/* <Counter ></Counter> */}
         {/* <Header></Header> */}
         {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
         {/* <Input></Input> */}
         {/* <TextAreaAutoResize></TextAreaAutoResize> */}
         {/* <Dropdown></Dropdown> */}
         {/* <HackerNewsWithHooks></HackerNewsWithHooks> */}
         {/* <Form></Form> */}
         <Form2></Form2>
      </div>
   );
}

export default App;
