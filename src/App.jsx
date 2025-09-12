import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Itinerary from "./pages/Itinerary";
import Chatbot from "./pages/Chatbot";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* ?? Navbar */}
        <nav className="bg-blue-700 text-white p-4 flex gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/budget" className="hover:underline">Budget</Link>
          <Link to="/itinerary" className="hover:underline">Itinerary</Link>
          <Link to="/chatbot" className="hover:underline">Chatbot</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </nav>

        {/* ?? Page Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

import './App.css';
