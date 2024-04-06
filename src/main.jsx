import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Pages/Root';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Authproviders from './Providers/Authproviders';
import Register from './Components/Pages/Register';
import Error from './Components/Pages/Error';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Review from './Components/Review/Review';

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import Games from './Components/Pages/Games';
import GameDetails from './Components/Pages/GameDetails';
import Layout from './Components/Dashboard/Layout';
import AddGame from './Components/Dashboard/AddGame';
import DeleteReviews from './Components/Dashboard/DeleteReviews';
import ReviewEdit from './Components/Review/ReviewEdit';
import Tictactoe from './Components/Playstation/TicTacToe/Tictactoe';
import MemoryGame from './Components/Playstation/MemoryGame/MemoryGame';
import RockPapers from './Components/Playstation/ROCKPAPER/ROCKPAPERS';
import AllProducts from './Components/Pages/AllProducts/AllProducts';
import Profile from './Components/Pages/Profile';



const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/games",
        element: <Games></Games>
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>

      },
      {
        path: "/givereviews/:id",
        element: <PrivateRoute><Review></Review></PrivateRoute>

      },
      {
        path: "/allreviews/:id",
        element: <PrivateRoute><GameDetails></GameDetails></PrivateRoute>

      },
      {
        path: "/reviewedit/:id",
        element: <PrivateRoute><ReviewEdit></ReviewEdit></PrivateRoute>

      },
      {
        path: "/65fb4bd65f39b097fab9ca70",
        element: <PrivateRoute><Tictactoe></Tictactoe></PrivateRoute>

      },
      {
        path: "/65f0a8a8ae783eabd1838b5e",
        element: <PrivateRoute><MemoryGame></MemoryGame></PrivateRoute>

      },
      {
        path: "/65f34b5c99e1a2ee5b485d60",
        element: <PrivateRoute><RockPapers></RockPapers></PrivateRoute>

      }
    ]
  },
  {
    path : '/dashboard' ,
    element : <Layout></Layout>,
    children  : [
      {
        path : '/dashboard/addgame' , 
        element : <PrivateRoute><AddGame></AddGame> </PrivateRoute>
      },
      {
        path : '/dashboard/deletereviews' , 
        element : <PrivateRoute><DeleteReviews></DeleteReviews></PrivateRoute>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </Authproviders>

  </React.StrictMode>,
)
