import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPages from "../pages/AboutPages/AboutPages";
import Cardigan from "../pages/CardiganPages/CardiganPages";
import ContactPages from "../pages/ContactPages/ContactPages";
import FeedbackPages from "../pages/FeedbackPages/FeedbackPages";
import HomePages from "../pages/HomePages/HomePages";
import HoodiesPages from "../pages/HoodiesPages/HoodiesPages";
import NoteFoundPage from "../pages/NotFoundPage/NoteFoundPage";
import Offer from "../pages/OfferPages/OfferPages";
import PrivacyPages from "../pages/PrivacyPages/PrivacyPages";
import ShopPages from "../pages/ShopPages/ShopPages";
import Sweatshirt from "../pages/SweatshirtPages/SweatshirtPages";
import CoatPages from "../pages/CoatPages/CoatPages";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePages />, id: 1 },
    { link: "/shop", element: <ShopPages />, id: 2 },
    { link: "/about", element: <AboutPages />, id: 3 },
    { link: "*", element: <NoteFoundPage />, id: 4 },
    { link: "/Privacy", element: <PrivacyPages />, id: 5 },
    { link: "/offer", element: <Offer />, id: 6 },
    { link: "/coat", element: <CoatPages />, id: 7 },
    { link: "/sweatshirt", element: <Sweatshirt />, id: 8 },
    { link: "/cardigan", element: <Cardigan />, id: 9 },
    { link: "/hoodies", element: <HoodiesPages />, id: 10 },
    { link: "/contact", element: <ContactPages />, id: 11 },
    { link: "/feedback", element: <FeedbackPages />, id: 12 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
