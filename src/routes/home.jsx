import { NavLink } from "react-router-dom";
import PageTitle from "../components/page-title";

export default function Home() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center text-center vh-100"
        style={{
          backgroundImage: 'url("./src/routes/bg-james.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ color: "white" }}>
          <h2>Hello, I'm</h2>
          <h1>James Udani</h1>
          <NavLink to="/about" className="nav-link">
            Read more
          </NavLink>
        </div>
      </div>
    </>
  );
}
