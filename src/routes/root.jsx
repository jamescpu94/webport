import { Link, NavLink, Outlet } from "react-router-dom";
import NavBarTop from "../nav-bar-top";
import Footer from "../footer";

export default function Root() {
  return (
    <>
      <NavBarTop />

      <div id="detail" className="container-fluid px-0">
        <Outlet />
      </div>
      <div className="mt-5" style={{ backgroundColor: "gray" }}>
        <Footer />
      </div>
    </>
  );
}
