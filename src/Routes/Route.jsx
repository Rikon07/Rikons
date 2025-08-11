import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true, Component: Home
        }
    ],
  },
]);

export default router;