import SearchBar from "../SearchBar/SearchBar";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/context";
import { Link, useParams } from "react-router-dom";

const ResultsComponent = (props) => {
  //  useContext für Search Input importieren
  const { searchItem, setSearchItem } = useContext(SearchContext);

  // useState für Ingredient Filter
  const [ingredient, setIngredient] = useState();

  // useState für mainIngredient Fetch
  const [ingredientMeals, setIngredientMeals] = useState();

  // useState für div suggestions
  const [showItems, setShowItems] = useState(false);

  // useParam für mainIngredient Fetch (Link auslesen)
  const { mainIngredient } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals != null) {
          setIngredient(data.meals);
        }
      })
      .catch((error) => console.log("Fehler", error));
  }, [searchItem]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIngredientMeals(data);
      })
      .catch((error) => console.log("Fehler", error));
  }, [mainIngredient]);

  let ingredientArray = [];
  ingredient
    ? ingredient.map((item) => ingredientArray.push(item.strIngredient))
    : console.log("No data");

  let übersicht = [];
  ingredientArray?.map((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
      ? übersicht.push(item)
      : ""
  );

  const testiRun = () => {
    props.testi.setTesti(true);
  };

  return (
    <section>
      <div className={`suggestions ${searchItem.length > 0 ? "show" : ""}`}>
        {searchItem === ""
          ? ""
          : übersicht.map((item, index) => (
              <Link onClick={testiRun} key={index} to={`/results/${item}`}>
                {item}
              </Link>
            ))}
      </div>
      <section>
        <p className="see-all" onClick={() => props.testi.setTesti(false)}>
          See All
        </p>
        {ingredientMeals !== null ? (
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
