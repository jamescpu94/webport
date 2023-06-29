import { NavLink, Link } from "react-router-dom";
import SocialList from "./components/social-list";

export default function Footer() {
  return (
    <div class="container p-5 " style={{ color: "white" }}>
      <div class="row">
        <div class="col">
          <h2>Go to</h2>
          <ul id="navigator">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/works">Works</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2>Social</h2>
          <SocialList />
        </div>
        <div class="col">
          <h2>Socialsss</h2>
        </div>
      </div>
    </div>
  );
}
