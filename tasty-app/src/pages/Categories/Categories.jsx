import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Categories.css";
const Categories = () => {
  return (
    <section className="categories">
      <SearchBar />
      <h1>Categories</h1>
      <NavBar />
    </section>
  );
};

export default Categories;
