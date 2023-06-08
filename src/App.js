import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css"
import Home from "./PAGES/Home";
import Homepage from "./PAGES/Homepage";
import Customers from "./PAGES/Customers";
import Giftcards from "./PAGES/Giftcards";
import Sell from "./PAGES/Sell";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        < Route path="/" element={<Homepage/>} >
          <Route index element= {<Home />} />
          <Route path="customers" element={<Customers />} />
          <Route path="giftcards" element={<Giftcards />} />
          <Route path="sell" element={<Sell />} />
        </Route >
      </Routes>
    </BrowserRouter>
  );
};

export default App;
