import React from 'react'
import './hero.css'
import fr from './../../image/hero frame.jpg'
const Hero = () => {
  return (
  <div className='hero'>
   
   <div className='left'>
   <img src={fr} alt='frame'/>

   </div> 
   <div className='right'>
     
   <h1> We filter your ad tech problems</h1>
      <br></br>
   <p> We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!</p>
   </div> 
    
 
  </div>
  
  )
}

export default Hero