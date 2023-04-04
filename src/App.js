import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvaider from "./context/ProductContextProvaider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <ProductContextProvaider>
        <BrowserRouter>
          <Navbar />
          <MainRoutes />
          <Footer />
        </BrowserRouter>
      </ProductContextProvaider>
    </div>
  );
};

export default App;
