import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Results.css";

import { useEffect, useState, useContext } from "react";

import { SearchContext } from "../../context/context";
import ResultsComponent from "../../components/ResultsComponent/ResultsComponent";

const Results = () => {
  //  useContext für Search Input importieren
  const { searchItem, setSearchItem } = useContext(SearchContext);

  // für Name Filter
  const [name, setName] = useState();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((data) => setName(data))
      .catch((err) => console.log("Fehler", err));
  }, [searchItem]);

  return (
    <section>
      <SearchBar />
      <section className="results">
        {name ? (
          name.meals.map((item, index) => (
            <div key={index}>
              <img src={item.strMealThumb} alt="food" />
              <h5>{item.strMeal}</h5>
              <Link to={`/details/${item.idMeal}`}>
                {" "}
                <img
                  src="../../../public/img/Arrow Right - Small.png"
                  alt="arrow"
                />
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <ResultsComponent />
      <NavBar />
    </section>
  );
};

export default Results;
