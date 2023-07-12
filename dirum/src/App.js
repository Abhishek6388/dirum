import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./screens/Login";
import Signin from "./screens/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
