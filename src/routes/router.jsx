import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Errorpage from "../components/Errorpage/Errorpage";
import AddEquipments from "../components/AddEquipments/AddEquipments";
import AllEquipments from "../components/AllEquipments/AllEquipments";
import Details from "../components/Details/Details";

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
        element: <AddEquipments></AddEquipments>,
      },
      {
        path: "/AllEquipments",
        element: <AllEquipments></AllEquipments>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/details/:_id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:5000/equipments/${params._id}`
          );
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);

export default router;
