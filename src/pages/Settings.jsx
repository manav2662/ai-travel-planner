import { useState, useEffect } from 'react';

export default function Settings() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Dark');
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'USD');
  const [units, setUnits] = useState(localStorage.getItem('units') || 'Metric');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('currency', currency);
    localStorage.setItem('units', units);
  }, [theme, currency, units]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">?? Settings</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Theme</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} className="w-full p-2 rounded text-black">
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Currency</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full p-2 rounded text-black">
            <option>USD</option>
            <option>EUR</option>
            <option>INR</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Units</label>
          <select value={units} onChange={(e) => setUnits(e.target.value)} className="w-full p-2 rounded text-black">
            <option>Metric</option>
            <option>Imperial</option>
          </select>
        </div>
      </form>
      <div className="mt-6 p-4 bg-gray-700 rounded">
        <h2 className="text-xl mb-2">Preview</h2>
        <p>Theme: {theme}</p>
        <p>Currency: {currency}</p>
        <p>Units: {units}</p>
      </div>
    </div>
  );
}
