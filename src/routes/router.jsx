import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Errorpage from "../components/Errorpage/Errorpage";
import AddEquipments from "../components/AddEquipments/AddEquipments";
import AllEquipments from "../components/AllEquipments/AllEquipments";
import Details from "../components/Details/Details";
import MyEquipments from "../components/MyEquipments/MyEquipments";
import Update from "../components/Update/Update";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/equipments/home"),
      },
      {
        path: "/AddEquipments",
        element: (
          <PrivateRoute>
            <AddEquipments></AddEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "/AllEquipments",
        element: (
          <PrivateRoute>
            <AllEquipments></AllEquipments>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:5000/equipments/${params._id}`
          );
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/myEquipments",
        element: (
          <PrivateRoute>
            <MyEquipments></MyEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:_id",
        element: <Update></Update>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params._id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
