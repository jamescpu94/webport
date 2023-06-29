import { NavLink } from "react-router-dom";

export default function CustomCard() {
  return (
    <div className="col m-3">
      <NavLink className="text-dark">
        <div className="c-card">
          <img src="src/assets/bg-james.jpg" />
        </div>
        <h3>Title Here</h3>
      </NavLink>
    </div>
  );
}
