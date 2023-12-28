import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/home";
import Detail from "./components/detail";
import Landing from "./components/landing";
// import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>

    </div>
  );
}

export default App;
