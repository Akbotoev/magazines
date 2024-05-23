import React from 'react';
import './App.css'
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { ProductsWomen } from './Components/Products';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import LookBook from './assets/pages/LookBook'
import Features from './assets/pages/Features'
import Pages from './assets/pages/Pages'
import Blog from './assets/pages/Blog'
import Shop from './assets/pages/Shop'
import Logo from './assets/pages/Logo'
import ProductMan from './Components/ProductMan';

 export const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Header/>
    
     <Routes>
     <Route path='/' element={<> <Logo/>,<Hero/>,  <ProductMan/>,<ProductsWomen/> </>}/>
     <Route path='/Home' element={<>,<Hero/>,<ProductsWomen/>,<ProductMan/> </>}/>
     <Route path='/Shop' element={<Shop/>}/>
     <Route path='/LookBook' element={<LookBook/>}/>
     <Route path='/Features' element={<Features/>}/>
     <Route path='/Pages' element={<Pages/>}/>
     <Route path='/Blog' element={<Blog/>}/>
     </Routes>
     </BrowserRouter>
    
  
     </div>
  );
};
export default App;
//SPA приложения

