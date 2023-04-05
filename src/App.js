import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvier from './context/AuthContextProvier';
import CartContextProvider from './context/CartContextProvider';
import ProductContextProvider from './context/ProductContextProvaider';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <div>
      <AuthContextProvier>
        <CartContextProvider>
          <ProductContextProvider>
            <BrowserRouter>
              <Navbar />
              <MainRoutes />
              <Footer />
            </BrowserRouter>
          </ProductContextProvider>
        </CartContextProvider>
      </AuthContextProvier>
    </div>
  );
};

export default App;
