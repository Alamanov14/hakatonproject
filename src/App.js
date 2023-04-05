import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CartContextProvider from "./context/CartContextProvider";
import ProductContextProvider from "./context/ProductContextProvaider";
import FavoriteContextProvider from "./context/FavoriteContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <FavoriteContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <BrowserRouter>
              <Navbar />
              <MainRoutes />
              <Footer />
            </BrowserRouter>
          </ProductContextProvider>
        </CartContextProvider>
      </FavoriteContextProvider>
    </div>
  );
};

export default App;
