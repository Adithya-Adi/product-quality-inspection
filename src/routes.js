import Dashboard from "views/Dashboard.js";
import Templates from "views/Templates.js";
import Item from "views/Item";
import QcResult from "views/QCResult";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/template",
    name: "Template",
    icon: "nc-icon nc-paper",
    component: <Templates />,
    layout: "/admin",
  },
  {
    path: "/item",
    name: "Item",
    icon: "nc-icon nc-tile-56",
    component: <Item />,
    layout: "/admin",
  },
  {
    path: "/qc-result",
    name: "QC Result",
    icon: "nc-icon nc-single-copy-04",
    component: <QcResult />,
    layout: "/admin",
  },
];
export default routes;
