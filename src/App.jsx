import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="pt-12 font">
                <h1 className="text-center text-black text-4xl font-medium font-semibold mb-5">
                    Live anywhere
                </h1>
                <h2 className="text-center font-light text-xl text-gray-500 mb-10">
                    Keep calm & Travel On
                </h2>
                <div className="item-container flex justify-center p-5 max-h-52">
                    <div className="grid grid-cols-3 gap-4 absolute">
                        <div className="max-h-4">
                            <img
                                src="https://source.unsplash.com/random"
                                alt=""
                                srcset=""
                            />
                            <h4 className="title">Hello</h4>
                            <p>Random</p>
                        </div>
                        <img
                            src="https://source.unsplash.com/random"
                            alt=""
                            srcset=""
                        />
                        <div className="">
                            <img
                                src="https://source.unsplash.com/random"
                                alt=""
                                srcset=""
                            />
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
