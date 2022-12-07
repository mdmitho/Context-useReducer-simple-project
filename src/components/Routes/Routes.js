import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../../App";
import { About } from "../page/About";
import { Cart } from "../page/Cart";
import { Home } from "../page/Home";
import TopRated from "../page/TopRated";


const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>,
    },
    {
      path: "cart",
      element: <Cart/>,
    },
    {
      path: "topRated",
      element: <TopRated/>,
    },
  ]);

  export default router;