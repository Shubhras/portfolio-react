import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error404 from './pages/Errors/Error404';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
export default router;
//
// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );