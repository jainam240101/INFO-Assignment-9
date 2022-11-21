import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./App/About/About";
import Contact from "./App/Contact/Contact";
import Home from "./App/Home/Home";
import Jobs from "./App/Jobs/Jobs";
import Login from "./App/Login/Login";

const App = () => {
  const user = localStorage.getItem("user");
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/jobs" element={<Jobs />} />
    </Routes>
  );
};

export default App;
