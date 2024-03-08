import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Areas.css";
const Areas = () => {
  const [data, setData] = useState();
  return (
    <section className="areas">
      <SearchBar />
      <h1>Areas</h1>
      <NavBar />
    </section>
  );
};

export default Areas;
