import { Link, NavLink, Outlet } from "react-router-dom";
import NavBarTop from "../nav-bar-top";
import Footer from "../footer";

export default function Root() {
  return (
    <>
      <NavBarTop />
      <div id="detail" className="container-fluid p-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
