import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./assets/fonts/css/author.css";
import "./assets/fonts/css/chillax.css";
import "./assets/globals.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/index.tsx";
import Register from "./pages/Register/index.tsx";
import DashBoard from "./pages/Dashboard/Dashboard.tsx";
import Users from "./pages/Users/index.tsx";
import Buses from "./pages/Buses/index.tsx";
import AddUser from "./pages/AddUser/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/buses",
    element: <Buses />,
  },
  {
    path: "/users/add",
    element: <AddUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
