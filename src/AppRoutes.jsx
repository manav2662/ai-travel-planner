import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Itinerary from "./pages/Itinerary";
import Chatbot from "./pages/Chatbot";
import Settings from "./pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="budget" element={<Budget />} />
        <Route path="itinerary" element={<Itinerary />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
