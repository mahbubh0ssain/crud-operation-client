import { createBrowserRouter } from "react-router-dom";
import AddProducts from "./AddProducts";
import Edit from "./Edit";
import Home from "./Home";
import Main from "./Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/edit/:id",
        element: <Edit></Edit>,
      },
    ],
  },
]);
