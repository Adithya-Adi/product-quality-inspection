import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav, Button } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import { useNavigate } from "react-router-dom";


var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  const navigate = useNavigate();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const handleLogout = () => {
    const confirmDelete = window.confirm("Are you sure you want to logout?");
    if (!confirmDelete) {
      return;
    }
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">

        <a
          href=" "
          className="simple-text logo-normal"
        >
          Shop Floor Management
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li
                className={
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                }
                key={key}
              >
                <NavLink to={prop.layout + prop.path} className="nav-NavLink">
                  <i className={prop.icon} />
                  <p>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
        <div style={{ position: "relative", left: "30%", top: "60%" }}>
          <Button className="btn-round"
            color="danger"
            type="submit"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
