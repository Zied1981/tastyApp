import { useState, useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Areas.css";
import { SearchContext } from "../../context/context";
const Areas = () => {
  const [data, setData] = useState();
  const { searchItem } = useContext(SearchContext);
  return (
    <section className="areas">
      <SearchBar />
      <p>{searchItem}</p>
      <NavBar />
    </section>
  );
};

export default Areas;
