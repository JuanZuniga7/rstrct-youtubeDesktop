import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout/>}>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/about" element={<div>About</div>} />
        </Route>
    )
);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
);
