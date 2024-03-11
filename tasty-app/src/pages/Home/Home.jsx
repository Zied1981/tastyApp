import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import SearchBarHome from "../../components/SearchBarHome/SearchBarHome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [randomMeal, setRandomMeal] = useState();
  const [areas, setAreas] = useState();
  const [categories, setCategory] = useState();

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

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log("Categories", err));
  }, []);

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
        <h3>Areas</h3>{" "}
        <div className="area-home">
          {areas ? (
            areas.meals.map((item, index) => (
              <Link to="/categories" key={index}>
                {item.strArea}
              </Link>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
        <h3>Categories</h3>
        <div className="categories-home">
          {categories ? (
            categories.categories.map((item, index) => (
              <div className="single-category" key={index}>
                <Link to="/categories">
                  <img src={item.strCategoryThumb} />
                  {item.strCategory}
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>{" "}
      <NavBar />
    </>
  );
};

export default Home;
