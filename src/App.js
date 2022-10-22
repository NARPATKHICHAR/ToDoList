import React from "react";
import Home from "./component/Home";
import "./App.css";
import TextForm from "./component/textForm";
// import About from './component/About';
import { Footer } from "./component/Footer";

function App() {
  return (
    <div>
      <Home />
      <div className="container">
        <TextForm heading="Enter your text" />
        {/* <About/> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
