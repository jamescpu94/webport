import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page";
import Home from "./routes/home.jsx";
import Projects from "./routes/projects.jsx";
import AboutMe from "./routes/about-me.jsx";
import ContactMe from "./routes/contact-me.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/projects",
            element: <Projects />,
          },
          {
            path: "/about-me",
            element: <AboutMe />,
          },
          {
            path: "/contact-me",
            element: <ContactMe />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
