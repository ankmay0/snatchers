import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "../Pages/Shop";
import Home from "../Pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
