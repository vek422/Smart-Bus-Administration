import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/fonts/css/author.css";
import "./assets/fonts/css/chillax.css";
import "./assets/globals.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/index.tsx";
import Register from "./pages/Register/index.tsx";
import DashBoard from "./pages/Dashboard";
import Buses from "./pages/Bus/index.tsx";
import Users from "./pages/Users/index.tsx";
import Route from "@/pages/Route";
import { Toaster } from "./components/ui/sonner.tsx";

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
    path: "/bus",
    element: <Buses />,
  },
  {
    path: "/user",
    element: <Users />,
  },
  {
    path: "/route",
    element: <Route />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    <Toaster />
  </ThemeProvider>
);
