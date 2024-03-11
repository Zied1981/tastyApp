import "./SearchBarHome.css";
import { Link } from "react-router-dom";
const SearchBar = () => {
  return (
    <section className="searchbarhome">
      <label>
        <input type="text" name="" id="search" placeholder="Search" />
      </label>
    </section>
  );
};

export default SearchBar;
