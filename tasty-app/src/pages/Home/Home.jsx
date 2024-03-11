import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import SearchBarHome from "../../components/SearchBarHome/SearchBarHome";
import { useState, useEffect } from "react";

const Home = () => {
  const [randomMeal, setRandomMeal] = useState();

  const [areas, setAreas] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRandomMeal(data))
      .catch((err) => console.log("Random Meal", err));
  }, []);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setAreas(data))
      .catch((err) => console.log("Area List", err));
  }, []);

  console.log(areas);
  return (
    <>
      {" "}
      <SearchBarHome />
      <section className="home">
        <h3>Meal of the Day</h3>
        {randomMeal ? (
          <div className="random-meal">
            <h4>{randomMeal.meals[0].strMeal}</h4>
            <div className="random-info">
              <p>{randomMeal.meals[0].strCategory}</p>
              <p>{randomMeal.meals[0].strArea}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <h3>Areas</h3>
        {areas ? (
          areas.meals.map((item, index) => (
            <div key={index} className="area-home">
              <p>{item.strArea}</p>
            </div>
          ))
        ) : (
          <p>Loading</p>
        )}
        <NavBar />
      </section>
    </>
  );
};

export default Home;
