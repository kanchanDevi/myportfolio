import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Componentss/Header/Header";
import Home from "./src/Componentss/Home/Home";
import Projects from "./src/Componentss/Projects/Projects";
import Footer from "./src/Componentss/Footer/Footer";
import About from "./src/Componentss/About/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
       
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
    
    ],
  },
]);

const root1 = ReactDom.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);
