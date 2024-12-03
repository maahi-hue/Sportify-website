import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>home</h1>,
  },
  {
    path: "auth",
    element: <h1>login</h1>,
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);

export default router;
