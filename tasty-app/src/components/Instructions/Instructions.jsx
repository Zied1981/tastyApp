import "./Instructions.css";

const Instructions = (props) => {
  console.log(props.toggolino);
  return (
    <section
      className={`instructions ${props.toggolino ? "toggleklasse" : ""}  `}
    >
      {props.instData ? (
        <div>
          <h3>Instructions</h3>
          <p>{props.instData.strInstructions}</p>
        </div>
      ) : (
        <p>Load...</p>
      )}
    </section>
  );
};

export default Instructions;
