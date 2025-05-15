import React from 'react';
import Navbar from '../src/components/navbar'; 
import ImageSlider from './components/ImageSlider'; 
import Footer from './components/footer';
import ProductCard1 from './components/productCart1';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='max-w-[1250px] mx-auto'>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <ImageSlider />
      <ProductCard1/>
      <Footer />
    </div>
  );
}

export default App;
