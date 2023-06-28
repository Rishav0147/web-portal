import React from 'react'
import './end.css'
import end1 from './../../image/end1.jpg'
import end2 from './../../image/end2.jpg'
import end3 from './../../image/end3.jpg'
import end4 from './../../image/end4.jpg'
export const End = () => {
    return(
       <div className='end-main'>


       <div className='end-head'>
       <p>Who we are</p>
       </div>
       

       <div className='end-full'>
       <div className='end-left'>
         <p>We are the essential tool in a digital marketer’s handbag. We are on a mission to create trust, uphold integrity, drive growth & value across the digital ecosystem. We empower our customers with a holistic view of their respective journeys’ in the digital ecosystem by providing them with accurate real-time data that helps them understand their returns on their digital investments.</p>
       </div>


       <div className='end-right'>


       <div className='end-row1'>

       <div className='end1'>
      <img src={end1} alt='end1'/>
      <p>Power of AI/ML</p>
      </div>


      <div className='end2'>
      <img src={end2} alt='end2'/>
      <p>Future Ready Tech</p>
      </div>

      </div>
       
       <div className='end-row2'>
       <div className='end-row1'>
       
       <div className='end1'>
      <img src={end3} alt='end1'/>
      <p>Real-Time Tracking</p>
      </div>


      <div className='end2'>
      <img src={end4} alt='end2'/>
      <p>Seamless Integration</p>
      </div>

      </div>
       </div>


       </div>


       </div>




       </div>
    )
}

