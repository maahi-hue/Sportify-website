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
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://equi-sports-server-kappa.vercel.app/equipments/home"),
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
        loader: async () =>
          fetch("https://equi-sports-server-kappa.vercel.app/equipments"),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://equi-sports-server-kappa.vercel.app/equipments/${params._id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch equipment details");
            }
            return response.json();
          } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch equipment details");
          }
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
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://equi-sports-server-kappa.vercel.app/equipments/${params._id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch equipment details for update");
            }
            return response.json();
          } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch equipment details for update");
          }
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
