import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/fonts/css/author.css";
import "./assets/fonts/css/chillax.css";
import "./assets/globals.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/index.tsx";
import Register from "./pages/Register/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
