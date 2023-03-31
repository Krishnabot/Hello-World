import React from "react";
import { Routes, Route } from "react-router-dom";
import Greeting from "./components/Greeting";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}
