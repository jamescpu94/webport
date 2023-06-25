import { Link, NavLink, Outlet } from "react-router-dom";
import NavBarTop from "../nav-bar-top";

export default function Root() {
  return (
    <>
      <NavBarTop />
      <div id="detail" className="container">
        <Outlet />
      </div>
    </>
  );
}
