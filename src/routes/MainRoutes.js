import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPages from "../pages/AboutPages/AboutPages";
import HomePages from "../pages/HomePages/HomePages";
import NoteFoundPage from "../pages/NotFoundPage/NoteFoundPage";
import ShopPages from "../pages/ShopPages/ShopPages";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePages />, id: 1 },
    { link: "/shop", element: <ShopPages />, id: 2 },
    { link: "/about", element: <AboutPages />, id: 3 },
    { link: "*", element: <NoteFoundPage />, id: 4 },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} key={item.id} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
