import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/spartials/About";
import NotFound from "./components/NotFound";
import Trending from "./components/Trending"
// importing the index css
import "./index.css";
const App=() => {
      return(
        <div className="bg-[#1F1E24] w-screen h-screen flex">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      );
}
export default App;