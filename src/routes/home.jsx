import { NavLink } from "react-router-dom";
import PageTitle from "../components/page-title";

export default function Home() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center text-center vh-100"
        style={{
          backgroundImage: 'url("./src/assets/bg-james.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ color: "white" }}>
          <h2>Hello, I'm</h2>
          <h1>James Udani</h1>
          <NavLink
            type="button"
            className="btn btn-outline-light d-inline-flex align-items-center"
            to="/works"
          >
            Read more&nbsp;<i class="fa-solid fa-arrow-right"></i>
          </NavLink>
        </div>
      </div>
      <div className="container text-center">
        <PageTitle title="Works" />
        <div className="row">
          <div className="col">1 project</div>

          <div className="col">1 project</div>

          <div className="col">1 project</div>
        </div>
        <NavLink
          type="button"
          className="btn btn-outline-dark d-inline-flex align-items-center"
          to="/works"
        >
          View All Work&nbsp;<i class="fa-solid fa-arrow-right"></i>
        </NavLink>
      </div>
    </>
  );
}
