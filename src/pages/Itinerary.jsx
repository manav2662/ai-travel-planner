import { useState, useEffect } from "react";
import "../App.css"; // import your CSS

export default function Itinerary() {
  const [location, setLocation] = useState(
    localStorage.getItem("location") || ""
  );
  const [preferences, setPreferences] = useState(
    localStorage.getItem("preferences") || ""
  );
  const [plan, setPlan] = useState(localStorage.getItem("plan") || null);

  useEffect(() => {
    localStorage.setItem("location", location);
    localStorage.setItem("preferences", preferences);
    if (plan) localStorage.setItem("plan", plan);
  }, [location, preferences, plan]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itinerary = `3-day itinerary for ${location}, focusing on ${preferences}.`;
    setPlan(itinerary);
  };

  return (
    <div className="page">
      <h1 className="title">🗺️ Itinerary Planner</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Enter location"
          />
        </div>
        <div className="form-group">
          <label>Preferences</label>
          <textarea
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="e.g., adventure, food, culture"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Generate Itinerary
        </button>
      </form>
      {plan && <p className="result">{plan}</p>}
    </div>
  );
}
