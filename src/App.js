import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./HomePage";
import AlabayGuardScreen from "./components/AlabayGuardScreen";
import AlabayLostHeritageScreen from "./components/AlabayLostHeritageScreen";


function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/AlabayGuardScreen" element={<AlabayGuardScreen />}/>
        <Route path="/AlabayLostHeritageScreen" element={<AlabayLostHeritageScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;
