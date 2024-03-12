import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Results.css";

import { useEffect, useState, useContext } from "react";

import { SearchContext } from "../../context/context";
import ResultsComponent from "../../components/ResultsComponent/ResultsComponent";

const Results = () => {
  //  useContext für Search Input importieren
  const { searchItem, setSearchItem } = useContext(SearchContext);

  // useState für Name Filter
  const [name, setName] = useState();

  // useState für Test
  const [testi, setTesti] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals != null) {
          setName(data);
        }
      })
      .catch((err) => console.log("Fehler", err));
  }, [searchItem]);

  console.log(testi);

  return (
    <section>
      <SearchBar />
      <ResultsComponent testi={{ setTesti }} />
      <section className={`results ${testi ? "showNoMeal" : ""} `}>
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

      <NavBar />
    </section>
  );
};

export default Results;
