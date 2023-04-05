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
import FavoritePages from "../pages/FavoritePages/FavoritePages";
import AdminPage from "../pages/AdminPage/AdminPage";
import EditProductPage from "../pages/EditProductPage/EditProductPage";
import Cart from "../components/cart/Cart";
import Login from "../components/Login/Login";
import Order from "../components/Order/Order";

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
    { link: "/favorite", element: <FavoritePages />, id: 13 },
    { link: "/admin", element: <AdminPage />, id: 14 },
    { link: "/editPage/:id", element: <EditProductPage />, id: 15 },
    { link: "/cart", element: <Cart />, id: 16 },
    { link: "/login", element: <Login />, id: 17 },
    { link: "/order", element: <Order />, id: 18 },
  ];
  //   const PRIVATE_ROTES = [{ link: "/admin", element: <AdminPage />, id: 5 }];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
      {/* <Routes>
          {PRIVATE_ROTES.map((item) => (
            <Route path={item.link} element={item.element} key={item.id} />
          ))}
        </Routes> */}
    </>
  );
};

export default MainRoutes;
