import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/OrderMain/Order";
import Login from "../pages/Login/Login";
import About from "../pages/About/About/About";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/about',
          element:<About></About>
      },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    },
  ]);