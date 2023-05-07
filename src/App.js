import "./App.css";
import About from "./components/About";
import Mynavbar from "./components/Mynavbar";
import { TextForm } from "./components/Textarea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <Mynavbar/>
                <TextForm />
              </>
            }
          />
          <Route
            exact path="/about"
            element={
              <>
                <Mynavbar/>
                <About />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
