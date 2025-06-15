
import {
  createBrowserRouter,
} from "react-router";
import Mainlayout from "./Mainlayout";

import Home from "../Componets/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import PrivetRouter from "../Privetrouter/PrivetRouter";
import AddTutor from "../page/AddTutor";
import FindTutors from "../page/FindTutors";
 



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
        {
            path:'mylisting',
            element:<PrivetRouter><AddTutor></AddTutor></PrivetRouter>,
            
        },
           {
            path:'findtutors/:language',
            element: <FindTutors></FindTutors>,
            
        },

     
      
     
    ]
  },

]);