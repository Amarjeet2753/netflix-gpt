import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import LoginSingup from "../components/LoginSingup";
import ForgotPassword from "../components/ForgotPassword";
import { PrivateRoute } from "./PrivateRoute";
import Browse from "../components/Browse";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children : [
        {
          path: "/",
          element: <LoginSingup/>,
        },
        {
          path: "login/",
          element: <LoginSingup/>,
        },
        {
          path : "/forgot-password",
          element : <ForgotPassword/>
        },
      
      ]
    },
    // {
    //   path : "/forgot-password",
    //   element : <ForgotPassword/>
    // },
    {
      path: "/login",
      element: <LoginSingup/>,
    },
   
    {
      path: "/browse",
      element: <PrivateRoute/>, 
      children: [
        {
          index: true,
          element: <Browse />,
        }
      ]
    },
   
  ]);