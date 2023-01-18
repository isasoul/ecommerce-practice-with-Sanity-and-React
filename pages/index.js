import React from 'react';
import {product, FooterBanner, HeroBanner} from  '../components';


const home = () => ( 
  
  <div>
    <HeroBanner/>
    <div className='products-heading'>

     <h2>Best Selling Products</h2>
     <p> Toys of many variations</p>  

    </div>

    <div className='products-container'>

    {['Product 1','Product 2'].map(
     (product)=>product)}

    </div>
    <FooterBanner/>
    </div>
   
  )


export default home;