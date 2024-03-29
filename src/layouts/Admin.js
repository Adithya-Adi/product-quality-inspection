/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import QCField from "views/QCField.js";
import AddQcValue from "views/AddQcValue.js";
import AddTemplate from "views/AddTemplate.js";
import AddItem from "views/AddItem.js";
import AddItemQcValue from "views/AddItemQcValue.js";
import ViewReport from "views/ViewReport";
import routes from "routes.js";

var ps;

function Dashboard(props) {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const token = localStorage.getItem("token");

  if (!loggedInUser || !token) {
    return <Navigate to={"/"} replace></Navigate>;
  }

  const mainPanel = React.useRef();
  const location = useLocation();

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  }, []);
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);



  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={"black"}
        activeColor={"info"}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Routes>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                element={prop.component}
                key={key}
                exact
              />
            );
          })}
          <Route path="/view-qc-field/:id" element={<QCField />} />
          <Route path="/add-qc-value/:id" element={<AddQcValue />} />
          <Route path="/add-template" element={<AddTemplate />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/add-item-qc-value/:id/:prodNo/:templateNo" element={<AddItemQcValue />} />
          <Route path="/view-report/:id" element={<ViewReport />} />
        </Routes>
        <Footer fluid />
      </div>

    </div>
  );
}

export default Dashboard;
