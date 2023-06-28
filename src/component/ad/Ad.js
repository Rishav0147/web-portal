import React from 'react'
import './ad.css'
import ad1 from './../../image/ad1.png'
import ad2 from './../../image/ad2.png'
import ad3 from './../../image/ad3.png'
import ad4 from './../../image/ad4.png'
import ad5 from './../../image/ad5.png'
import ad6 from './../../image/ad6.png'
import ad7 from './../../image/ad7.png'
import ad8 from './../../image/ad8.png'
import cut1 from './../../image/cut1.png'
import cut2 from './../../image/cut2.png'

export const Ad = () => {
    return(
     <div className='main-ad'>
     <p>Trusted by</p>
     <div className='cut'>
     <img src={cut1} alt='cut1'/>
     </div>
     <div className='cut2'>
     <img src={cut2} alt='cut2'/>
     </div>
     <div className='main-ad1'>

     <div className='ad1'>
     <img src={ad1} alt='ad1'/>
     </div>

     <div className='ad2'>
     <img src={ad2} alt='ad2'/>
     </div>

     <div className='ad3'>
     <img src={ad3} alt='ad3'/>
     </div>

     </div>


     <div className='main-ad2'>

     <div className='ad4'>
    <img src={ad4} alt='ad4'/>
     </div>


     <div className='ad5'>
     <img src={ad5} alt='ad5'/>
     </div>


     <div className='ad6'>
     <img src={ad6} alt='ad6'/>
     </div>


     <div className='ad7'>
     <img src={ad7} alt='ad7'/>
     </div>


     <div className='ad8'>
     <img src={ad8} alt='ad8'/>
     </div>


     </div>
     </div>
    )
}
export default Ad