import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Results.css";
const Results = () => {
  return (
    <section className="results">
      <SearchBar />
      <h1>Results</h1>
      <NavBar />
    </section>
  );
};

export default Results;
