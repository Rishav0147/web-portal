import React from 'react'
import './footer.css'
import box1 from './../../image/box1.jpg'
import box2 from './../../image/box2 (2).jpg'
import box3 from './../../image/box3.jpg'
import box4 from './../../image/box4.jpg'
export const Footer = () => {
  return (
   
<div className='main1'>
    <p>Our Service</p>
    <div className='row-1'>
   <div className='box1'>
   <div className='image'>
   <img src={box1} alt='box1'/>
   </div>
   <div className='right-image'>
   <p>eCommerce Competitive Analtics</p>
   <p>Map your brand to the eCommerce landscape to enhance market share with real-time market intelligence...</p>
   </div>
   
  
   </div>
   <div className='box2'>
   <div className='image'>
   <img src={box2} alt='box2'/>
   </div>
   <div className='right-image'>
   <p>Brand Hygiene Protection</p>
   <p>Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.</p>
   </div>
   </div>
  </div>




   <div className='row-2'>
    <div className='box3'>
    <div className='image'>
    <img src={box3} alt='box3'/>
    </div>
    <div className='right-image'>
   <p>Mobile Identity Solution</p>
   <p>Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.</p>
   </div>
    </div>
    <div className='box4'>
    <div className='image'>
    <img src={box4} alt='box4'/>
    </div>
    <div className='right-image'>
    <p>Ad Traffic Validation</p>
    <p>Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.</p>
    </div>
    </div>
    </div>
    <p className='num'>Numbers Speak About Us!</p>
  </div>
    
    
  )
}
