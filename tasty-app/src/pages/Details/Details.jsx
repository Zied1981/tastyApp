import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import "./Details.css";
const Details = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
      .then((res) => res.json())
      .then((fetchData) => setData(fetchData))
      .catch((err) => console.error("Fehler auf der deteilseite", err));
  }, []);
  console.log(data);

  return (
    <section className="details">
      <h1>Details</h1>
      {/*     {data ? (
        data.map((item, index) => (
          <div key={index}>
            <img src={item.strMealThumb} alt="image" />
            <p>{item.strMeasure1}</p>
            <p></p>
            <p></p>
          </div>
        ))
      ) : (
        <p>loading...</p>
      )} */}

      <NavBar />
    </section>
  );
};

export default Details;
