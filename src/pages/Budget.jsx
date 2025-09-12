import { useState, useEffect } from "react";
import "../App.css"; // import your CSS

export default function Budget() {
  const [destination, setDestination] = useState(
    localStorage.getItem("destination") || ""
  );
  const [days, setDays] = useState(localStorage.getItem("days") || "");
  const [budget, setBudget] = useState(localStorage.getItem("budget") || "");
  const [result, setResult] = useState(
    localStorage.getItem("budgetResult") || null
  );

  useEffect(() => {
    localStorage.setItem("destination", destination);
    localStorage.setItem("days", days);
    localStorage.setItem("budget", budget);
    if (result) localStorage.setItem("budgetResult", result);
  }, [destination, days, budget, result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (days && budget) {
      const calc = `Your daily budget for ${destination} is $${(
        budget / days
      ).toFixed(2)}`;
      setResult(calc);
    }
  };

  return (
    <div className="page">
      <h1 className="title">💰 Budget Planner</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Destination</label>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Enter destination"
          />
        </div>
        <div className="form-group">
          <label>Number of Days</label>
          <input
            value={days}
            onChange={(e) => setDays(e.target.value)}
            type="number"
            placeholder="Enter days"
          />
        </div>
        <div className="form-group">
          <label>Budget (USD)</label>
          <input
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            type="number"
            placeholder="Enter budget"
          />
        </div>
        <button type="submit" className="btn">
          Calculate
        </button>
      </form>
      {result && <p className="result">{result}</p>}
    </div>
  );
}
