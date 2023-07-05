import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img from "./assets/images.jpg"
import img3 from "./assets/pune.jpg"
import img2 from "./assets/dummyimages/college.jpg"

function Slider2() {
  return (
    <div className='section4'>
     <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} showArrows={false}>
                <div className='sec4'>
                    <img src={img3} />
                    
                </div>
                <div className='sec4'>
                    <img src={img2} />
                    
                </div>
                <div className='sec4'>
                    <img src={img3} />
                    
                </div>
            </Carousel>
    </div>
  )
}

export default Slider2
