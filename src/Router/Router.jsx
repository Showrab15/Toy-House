import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from '../components/Home/Home'
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import AllToys from "../components/AllToys/AllToys";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import MyToys from "../components/MyToys/MyToys";
import UpdateToy from "../components/UpdateToy/UpdateToy";
import PrivateRoute from './PrivateRoute'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/alltoys/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment11-server-site-blond.vercel.app/toy-details/${params.id}`)
      },
      {
        path: 'addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: 'mytoys',
        element: <PrivateRoute> <MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/updatedToys/:id',
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment11-server-site-blond.vercel.app/toy-details/${params.id}`)
      },

    ]

  }


]);


export default router