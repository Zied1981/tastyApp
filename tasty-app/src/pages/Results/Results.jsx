import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Results.css";

import { useEffect, useState } from "react";

const Results = () => {
  // für Name Filter
  const [name, setName] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((res) => res.json())
      .then((data) => setName(data))
      .catch((err) => console.log("Fehler", err));
  }, []);

  // für Ingredient Filter
  const [ingredient, setIngredient] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((res) => res.json())
      .then((data) => setIngredient(data))
      .catch((err) => console.log("Fehler", err));
  }, []);

  console.log(ingredient);

  return (
    <section className="results">
      <SearchBar />
      <section>
        {name ? (
          name.map((item, index) => (
            <div key={index}>
              <img src={item.strMealThumb} alt="food" />
              <div>
                <h5>{item.strMeal}</h5>
                <p>{item.strTags}</p>
              </div>
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
