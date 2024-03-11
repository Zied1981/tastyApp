import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import "./Details.css";
import Ingredients from "../../components/Ingredients/Ingredients";
import Instructions from "../../components/Instructions/Instructions";

const Details = () => {
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
      .then((res) => res.json())
      .then((fetchData) => setData(fetchData))
      .catch((err) => console.error("Fehler auf der detailseite", err));
  }, []);

  let ingridients = [];

  const test = () => {
    for (let item in data.meals[0]) {
      if (item.includes("strIngredient")) {
        /*     console.log(typeof data.meals[0][item]); */

        if (
          typeof data.meals[0][item] != "string" ||
          data.meals[0][item] === ""
        ) {
          /*   console.log("ya"); */
        } else {
          console.log(data.meals[0][item]);
          ingridients.push(data.meals[0][item]);
        }
      }
    }
  };
  data ? test() : console.log("no");
  /* console.log(ingridients); */

  let measure = [];
  const testMes = () => {
    for (let newItem in data.meals[0]) {
      if (newItem.includes("strMeasure")) {
        console.log(typeof data.meals[0][newItem]);

        if (
          typeof data.meals[0][newItem] != "string" ||
          data.meals[0][newItem] === ""
        ) {
          /* console.log("yes"); */
        } else {
          console.log(data.meals[0][newItem]);
          measure.push(data.meals[0][newItem]);
        }
      }
    }
  };
  data ? testMes() : console.log("nööö");
  /*  console.log(mesure); */
  console.log(toggle);

  const togglfunc = () => {
    if (toggle === true) {
      setToggle((toggle) => !toggle);
    } else {
      return "";
    }
  };
  const togglfunkki = () => {
    if (toggle === false) {
      setToggle((toggle) => !toggle);
    } else {
      return "";
    }
  };

  return (
    <section className="details">
      {data ? (
        <div>
          <img /* style={{backgroundImage={{data.meals[0].strMealThumb}}}} */
            src={data.meals[0].strMealThumb}
            alt="bild"
          />

          <div className="details-headliner">
            <div className="details-wrapper">
              <h3>{data.meals[0].strMeal}</h3>
              <p>{data.meals[0].strTags}</p>
              <p>{data.meals[0].strCategory}</p>
              <p>{data.meals[0].strArea}</p>
            </div>
          </div>
          <div className="btn">
            <button
              onClick={
                togglfunc
                /* () => setToggle((toggle) => !toggle) */
              }
              className="inst-btn"
            >
              Instructions
            </button>
            <button
              onClick={
                togglfunkki
                /* () => setToggle((toggle) => !toggle) */
              }
              className="ing-btn"
            >
              Ingredients
            </button>
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
      <div className="ingr-flex">
        <Ingredients toggolino={toggle} data={measure} newData={ingridients} />

        <Instructions toggolino={toggle} instData={data ? data.meals[0] : ""} />
      </div>
      {/*  <Ingredients data={`${measure}${ingridients}`} /> */}
      {/*   <Instructions data={data.meals[0]} /> */}

      <NavBar />
    </section>
  );
};

export default Details;
