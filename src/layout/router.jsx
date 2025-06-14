
import {
  createBrowserRouter,
} from "react-router";
import Mainlayout from "./Mainlayout";

import Home from "../Componets/Home";
 



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
        {
            index:true,
            Component:Home,
          
        },
     
      
     
    ]
  },

]);