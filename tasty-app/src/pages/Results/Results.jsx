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

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((data) => setName(data))
      .catch((err) => console.log("Fehler", err));
  }, [searchItem]);

  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchItem}`)
  //     .then((res) => res.json())
  //     .then((data) => setIngredient(data))
  //     .catch((err) => console.log("Fehler", err));
  // }, []);

  // Ingredients aus dem fetch in einem neuen Array speichern, den wir später mappen
  // let ingredients = [];
  // const ingredientnames = () => {
  //   for (let item in name.meals[0]) {
  //     if (item.includes("strIngredient")) {
  //       // console.log(typeof name.meals[0][item]);

  //       if (
  //         typeof name.meals[0][item] != "object" &&
  //         name.meals[0][item] != ""
  //       ) {
  //         ingredients.push(name.meals[0][item]);
  //       }
  //     }
  //   }
  // };

  // name ? ingredientnames() : console.log("no");

  console.log(name);

  return (
    <section>
      <SearchBar />
      <section className="results">
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
      </section>
      {/* <section className="izel">
        {name ? (
          name.meals.map((item, index) =>
            ingredients.map((item2) =>
              item2.includes(searchItem) ? (
                <div key={index}>
                  <img src={item.strMealThumb} alt="food" />
                  <h5>{item.strMeal}</h5>
                  <img
                    src="../../../public/img/Arrow Right - Small.png"
                    alt="arrow"
                  />
                </div>
              ) : (
                <p>Loading...</p>
              )
            )
          )
        ) : (
          <p>Loading...</p>
        )}
      </section> */}

      {/* <section>
        {ingredients ? (
          ingredients.map((item, index) => (
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
      <NavBar />
    </section>
  );
};

export default Results;
