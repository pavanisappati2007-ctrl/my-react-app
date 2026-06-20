import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <h2>Student App</h2>

      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}