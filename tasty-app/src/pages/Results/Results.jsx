import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Results.css";

import { useEffect, useState, useContext } from "react";

import { SearchContext } from "../../context/context";

const Results = () => {
  //  useContext für Search Input importieren
  const { searchItem, setSearchItem } = useContext(SearchContext);

  // für Name Filter
  const [name, setName] = useState();
  // für Ingredient Filter
  const [ingredient, setIngredient] = useState();

  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
  //     .then((res) => res.json())
  //     .then((data) => setName(data))
  //     .catch((err) => console.log("Fehler", err));
  // }, [searchItem]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchItem}`)
      .then((res) => res.json())
      .then((data) => setIngredient(data))
      .catch((err) => console.log("Fehler", err));
  }, []);

  console.log(name);
  console.log(searchItem);

  return (
    <section>
      <SearchBar />
      {/* <section className="results">
        {name ? (
          name.meals.map((item, index) => (
            <div key={index}>
              <img src={item.strMealThumb} alt="food" />
              <h5>{item.strMeal}</h5>
              <img
                src="../../../public/img/Arrow Right - Small.png"
                alt="arrow"
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section> */}
      <section>
        {ingredient ? (
          ingredient.meals.map((item, index) => (
            <div key={index}>
              <img src={item.strMealThumb} alt="food" />
              <h5>{item.strMeal}</h5>
              <img
                src="../../../public/img/Arrow Right - Small.png"
                alt="arrow"
              />
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
