import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Errorpage from "../components/Errorpage/Errorpage";
import AddEquipments from "../components/AddEquipments/AddEquipments";
import AllEquipments from "../components/AllEquipments/AllEquipments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/AddEquipments",
        element: <AddEquipments></AddEquipments>,
      },
      {
        path: "/AllEquipments",
        element: <AllEquipments></AllEquipments>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
    ],
  },
]);

export default router;
