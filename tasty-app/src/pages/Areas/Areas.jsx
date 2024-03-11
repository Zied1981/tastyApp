import { useState, useContext, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Areas.css";
import { SearchContext } from "../../context/context";
const Areas = () => {
  const [data, setData] = useState();
  let [newData, setNewData] = useState();
  const { searchItem } = useContext(SearchContext);

  const areaName = "Italian";

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
      .then((res) => res.json())
      .then((apiAreaData) => setData(apiAreaData))
      .catch((err) => console.log("Area Data", err));
  }, []);

  console.log(data);
  return (
    <section className="areas">
      <SearchBar />
      <p>{searchItem}</p>
      <div className="meals-div">
        {data ? (
          data.meals.map((item) => (
            <div key={item.idMeal} className="meal">
              <p>{item.strMeal}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <NavBar />
    </section>
  );
};

export default Areas;
