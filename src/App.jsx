import Navbar from "./component/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style/app.css";
import Signboard from "./component/Signboard";

const App = () => {
  return (
    <div className="mainbg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Signboard />} />
      </Routes>
    </div>
  );
};

export default App;
