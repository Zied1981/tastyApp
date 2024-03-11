import { useEffect } from "react";
import "./Ingredients.css";

const Ingredients = (props) => {
  /*   console.log(props.data);
  console.log(props.newData); */
  let changeData = props.data;
  let newArr = [];

  const finalTest = () => {
    useEffect(() => {
      for (let i = 0; i < props.newData.length; i++) {
        newArr.push(`${changeData[i]} ${props.newData[i]}`);
      }
      console.log(newArr);
    }, []);
  };
  changeData ? finalTest() : console.log("nope");

  /*  console.log(props.newData); */

  /* 
       changeData.push(
      props.data.toSpliced(i , i, `${props.data[i]} ${props.newData[i]}`)
    ); */

  /*   console.log(changeData); */
  return (
    <article className={` ${props.toggolino ? "" : "toggleklasse"}  `}>
      <h3>Ingredients</h3>
      <section className="ingredients">
        <div className="cont-left">
          {props.data ? (
            props.data.map((item, index) => (
              <div key={index}>
                <ul>
                  <li> {item} </li>
                </ul>
              </div>
            ))
          ) : (
            <p>Load...</p>
          )}
        </div>
        <div className="cont-right">
          {props.newData ? (
            props.newData.map((newItem, index) => (
              <div key={index}>
                <p>{newItem}</p>
              </div>
            ))
          ) : (
            <p>Load...</p>
          )}
        </div>
      </section>
    </article>
  );
};

export default Ingredients;
