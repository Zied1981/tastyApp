import SearchBar from "../SearchBar/SearchBar";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/context";
import { Link, useParams } from "react-router-dom";

const ResultsComponent = () => {
  //  useContext für Search Input importieren
  const { searchItem, setSearchItem } = useContext(SearchContext);

  // useState für Ingredient Filter
  const [ingredient, setIngredient] = useState();

  // useState für mainIngredient Fetch
  const [ingredientMeals, setIngredientMeals] = useState();

  // useParam für mainIngredient Fetch (Link auslesen)
  const { mainIngredient } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => setIngredient(data.meals))
      .catch((error) => console.log("Fehler", error));
  }, [searchItem]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`
    )
      .then((res) => res.json())
      .then((data) => setIngredientMeals(data))
      .catch((error) => console.log("Fehler", error));
  }, [mainIngredient]);

  console.log(mainIngredient);

  let ingredientArray = [];
  ingredient
    ? ingredient.map((item) => ingredientArray.push(item.strIngredient))
    : console.log("No data");

  let übersicht = [];
  ingredientArray.map((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
      ? übersicht.push(item)
      : ""
  );

  console.log({ ingredientMeals });

  return (
    <section>
      <SearchBar />
      <section>
        {searchItem === "" ? (
          <p></p>
        ) : (
          übersicht.map((item, index) => (
            <Link key={index} to={`/results/${item}`}>
              {item}
            </Link>
          ))
        )}
      </section>
      <section>
        {ingredientMeals !== null ? (
          // searchItem.length <= 0 || typeof ingredientMeals === "object" ? (
          //   <p></p>
          // ) : (
          ingredientMeals?.meals?.map((item, index) => (
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
          // )
          <p> Loading... </p>
        )}
      </section>
    </section>
  );
};

export default ResultsComponent;
