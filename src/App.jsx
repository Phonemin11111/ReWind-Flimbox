import Navbar from "./component/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./component/Movies";
import "./style/app.css";

const App = () => {
  return (
    <div className="mainbg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default App;
