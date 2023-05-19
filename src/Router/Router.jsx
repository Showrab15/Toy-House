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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
      path : '/',
      element: <Home></Home>
     },
     {
      path: 'login',
      element: <Login></Login>
     },
     {
      path : 'register',
      element: <Register></Register>
     },
     {
      path : 'alltoys',
      element: <AllToys></AllToys>
     },
     {
      path : '/alltoys/:id',
      element : <ToyDetails></ToyDetails>,
      loader : ({params})=> fetch(`http://localhost:5000/allToys/${params.id}`)
     },
     {
      path : 'addtoy',
      element: <AddToy></AddToy>
     },
     {
      path : 'mytoys',
      element: <MyToys></MyToys>
     },
     {
      path : 'updatedToys/:id',
      element: <UpdateToy></UpdateToy>,
      loader : ({params}) => fetch(`http://localhost:5000/updateToys/${params.id}`)
     }
    ]

  }
]);


export default router