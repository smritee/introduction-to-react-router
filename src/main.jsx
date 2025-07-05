import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import Users from './component/Users/Users.jsx'
import UserDetails from './component/UserDetails/UserDetails.jsx'


const router = createBrowserRouter([
  {
    //Nesting Route
    path: "/",
    element: <Home></Home>,
    children:[
        {
          path:"/about",
          //element:<div>About Page</div>
          element:<About></About>
        },
        {
          path:"/contact",
          element:<Contact></Contact>   
        },
        {
          path:"/users",
          //How to load data through route
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element:<Users></Users>  
        },
        {
          path:"/user/:userId",
          //How to load data through route          
          //loader : ({params})=>console.log(params.userId),
          loader : ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element:<UserDetails></UserDetails>  
        }       
    ]

  },

]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     //element: <div>Hello world!</div>,
//     element: <Home></Home>,

//   },
//   {
//     path:"/about",
//     element:<div>About Page</div>
//   },
//   {
//     path:"/contact",
//     element:<div>Contact Page</div>    
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
