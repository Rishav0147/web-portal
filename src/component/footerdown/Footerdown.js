import React from 'react'
import './footerdown.css'
import right from './../../image/right img.png'
export const Footerdown = () => {
    return (
        
        

    <div className='main'> 
     
      <div className='left-main'>
      <div className='left-row1'>
    
      <div className='row1-1'>
      <p>1500+</p>
      <p>eCommerce Websites Tracked</p>
      </div>
     
      <div className='row1-1'>
      <p>100 K+</p>
      <p>Infringement Instances Identified</p>
      </div>
     
      <div className='row1-1'>
      <p>100 K+</p>
      <p>Brands Analyzed</p>
      </div>
      
      </div>
      
      <div className='left-row2'>
      
      <div className='row2-1'>
      <p>1 B+</p>
      <p>Video Frames Analyzed</p>
      </div>
       
      <div className='row2-1'>
      <p>3.5 B+</p>
      <p>Unique Device Coverage</p>
      </div>
       
      <div className='row2-1'>
      <p>$400 M+</p>
      <p>Saved for clients</p>
      </div>
       

      </div>
      </div>
      <div className='right-main'>
     <img src={right} alt='right'/>
      </div>
      </div>
    )
}
export default Footerdown