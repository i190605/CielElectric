import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Projects from "./components/pages/Projects";
import GetQuotation from "./components/pages/GetQuotation";
import Career from "./components/pages/Career";
import Contact from "./components/pages/Contact";
import ManagementProfile from "./components/pages/ManagementProfile";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/management-profile" element={<ManagementProfile />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/quotation" element={<GetQuotation />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                Copyright © 2024 Ciel Electric - All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
