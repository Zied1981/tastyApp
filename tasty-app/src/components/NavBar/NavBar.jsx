import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <h1>NavBar</h1>
      <Link to="/home">Home</Link>
      <Link to="/home/categories">Categories</Link>
      <Link to="/home/areas">Areas</Link>
      <Link to="/home/results">Results</Link>
      <Link to="/home/details">Details</Link>
    </nav>
  );
};

export default NavBar;
