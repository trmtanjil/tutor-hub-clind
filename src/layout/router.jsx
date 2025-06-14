
import {
  createBrowserRouter,
} from "react-router";
import Mainlayout from "./Mainlayout";

import Home from "../Componets/Home";
import Login from "../page/Login";
import Register from "../page/Register";
 



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
        {
            index:true,
            Component:Home,
          
        },
          {
            path:'login',
            Component:Login,
          
        },
        {
            path:'register',
            Component:Register,
        },
     
      
     
    ]
  },

]);