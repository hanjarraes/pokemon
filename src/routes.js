import  Details  from "./pages/Home/Details";
import Home from "./pages/Home";
import Favorite from "./pages/Favorit";

const routes = [
  {
    path: "/",
    component: Home,
    protected: true,
  },
  {
    path: "/detail/:item",
    component: Details,
    protected: true,
  },
  {
    path: "/favorit",
    component: Favorite,
    protected: true,
  },
];

export default routes;
