import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
