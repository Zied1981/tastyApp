import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
const Home = () => {
  return (
    <section className="home">
      <SearchBar />
      <h1>Home</h1>
      <NavBar />
    </section>
  );
};

export default Home;
