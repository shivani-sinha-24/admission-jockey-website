import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img from "./assets/images.jpg"
import img2 from "./assets/dummyimages/college.jpg"

function Slider3() {
  return (
   <>
   
   <div className='section7'>

    <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} showArrows={false}>
        <div className='layout'>
           <div className='layout1'>
            <h1>Get guaranteed</h1>
            <p>Admission in your dream college!!</p>
           </div>
           <div className='layout2'>
            <button>Apply Now</button>
           </div>

        </div>

        <div className='layout'>
           <div className='layout1'>
            <h1>Get guaranteed</h1>
            <p>Admission in your dream college!!</p>
           </div>
           <div className='layout2'>
            <button>Apply Now</button>
           </div>

        </div>

        <div className='layout'>
           <div className='layout1'>
            <h1> <span>Get </span> <span>guaranteed</span></h1>
            <p>Admission in your dream college!!</p>
           </div>
           <div className='layout2'>
            <button>Apply Now</button>
           </div>
        </div>

    </Carousel>


   </div>
   
   </>
  )
}

export default Slider3