import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error404 from './pages/Errors/Error404';
import ValueCheck from "./pages/ValueCheck";
import About from "./pages/About";
import Serotoned from "./pages/Serotoned";



import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "*",
    element: <Layout><Error404 /></Layout>,
  },
  {
    path: "/ValueCheck",
    element: <Layout><ValueCheck /></Layout>,
  },
  {
    path: "/About",
    element: <Layout><About/></Layout>,
  },

  {
    path: "/Serotoned",
    element: <Layout><Serotoned/></Layout>,
  },

]);
export default router;