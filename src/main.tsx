import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import { ParallaxProvider } from "react-scroll-parallax";

import "./main.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { EspecializaTI } from "./routes/pages/Studies/Especializati";
import { Alura } from "./routes/pages/Studies/Alura";
import { Iaexpertacademy } from "./routes/pages/Studies/Iaexpertacademy";
import { Rocketseat } from "./routes/pages/Studies/Rocketseat";
import { Digitalhouse } from "./routes/pages/Studies/Digitalhouse";
import { Mentorialaravelarchitect } from "./routes/pages/Studies/Mentorialaravelarchitect";
import { ReactPage } from "./routes/pages/Projects/ReactPage";
import { Vue } from "./routes/pages/Projects/Vue";
import { HtmlCss } from "./routes/pages/Projects/HtmlCss";
import { Laravel } from "./routes/pages/Projects/Laravel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "estudos/especializati",
    element: <EspecializaTI />,
    errorElement: <ErrorPage />,
  },
  {
    path: "estudos/alura",
    element: <Alura />,
    errorElement: <ErrorPage />,
  },
  {
    path: "estudos/iaexpertacademy",
    element: <Iaexpertacademy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "estudos/rocketseat",
    element: <Rocketseat />,
    errorElement: <ErrorPage />,
  },
  {
    path: "estudos/digitalhouse",
    element: <Digitalhouse />,
    errorElement: <ErrorPage />,
  },
  {
    path: "estudos/mentorialaravelarchitect",
    element: <Mentorialaravelarchitect />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projetos/laravel",
    element: <Laravel />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projetos/react",
    element: <ReactPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projetos/vue",
    element: <Vue />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projetos/html_css",
    element: <HtmlCss />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-screen">
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </div>
  </React.StrictMode>
);
