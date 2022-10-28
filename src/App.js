import React from "react";
import Home from "./component/Home";
import "./App.css";
import TextForm from "./component/textForm";
import About from "./component/About";
import { Footer } from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Home />

        <div className="container">
          <Routes>
            <Route
              heading="Enter your text"
              exact
              path="/"
              element={<TextForm />}
            />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
