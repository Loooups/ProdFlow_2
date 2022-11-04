import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductionSite from "./pages/ProductionSite";
import Statistics from "./pages/Statistics";
import Inbox from "./pages/Inbox";
import Notification from "./pages/Notification";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<ProductionSite />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
