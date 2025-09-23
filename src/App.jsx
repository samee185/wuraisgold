import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Project from "./pages/projects/Projects";
import Blogs from "./pages/blogs";
import Blog from "./pages/blogs/Blog";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Event from "./pages/events/Single";
import RegisterEvent from "./pages/events/Register";
import Faq from "./pages/faq";
import Volunteer from "./pages/volunteer";
import Donate from "./pages/donate";
import { ProjectProvider } from "./contexts/ProjectContext";
import BlogProvider from "./contexts/BlogContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:projectId",
    element: <Project />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:blogId",
    element: <Blog />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/:id",
    element: <Event />,
  },
  {
    path: "/events/:id/register",
    element: <RegisterEvent />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/volunteer",
    element: <Volunteer />
  },
  {
    path: "/donate-now",
    element: <Donate />
  }
]);

function App() {
  return (
    <div className="App bg-[#F9F9F9]">
      <ProjectProvider>
        <BlogProvider>
          <RouterProvider router={router} />
        </BlogProvider>
      </ProjectProvider>
    </div>
  );
}


export default App;
