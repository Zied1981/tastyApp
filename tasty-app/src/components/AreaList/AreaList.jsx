import { NavLink, Link } from "react-router-dom";

const AreaList = ({ data }) => {
  return (
    <>
      <div className="see">
        <h3>Areas</h3>
        <Link className="see-all" to="/areas">
          See all
        </Link>
      </div>
      <div className="area-home">
        {data ? (
          data.meals.map((item, index) => (
            <NavLink to="/areas" key={index}>
              {item.strArea}
            </NavLink>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};

export default AreaList;
