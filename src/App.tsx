import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyUs />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;