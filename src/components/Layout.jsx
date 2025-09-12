import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/budget">Budget</Link>
          <Link to="/itinerary">Itinerary</Link>
          <Link to="/chatbot">Chatbot</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* This renders the current page */}
      </main>

      <footer>
        <p>© 2025 AI Travel Planner</p>
      </footer>
    </>
  );
}
