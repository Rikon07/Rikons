
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import ProjectDetails from "../Pages/ProjectDetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [ 
          {index: true, Component: Home},
          { path: "projects/:projectId", Component: ProjectDetails }
    ],
  },
]);

export default router;