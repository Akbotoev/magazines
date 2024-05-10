import React from 'react';
import './App.css'
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Content } from './Components/Content';
import { Products } from './Components/Products';
import { Cards } from './Components/Casds'

  
 export const App = () => {
  return (
    <div>
     <Header/>
     <Hero />
      <Content/>
      <Products/>
     </div>

         
      
      
    
  );
};
export default App;
//SPA приложения

