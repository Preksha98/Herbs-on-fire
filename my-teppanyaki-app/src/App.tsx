import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teppanyaki from "./components/Teppanyaki";
import Reservation from "./Reservation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teppanyaki />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
