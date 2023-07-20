import React, { useState } from 'react';
import phone1 from "../assets/phone.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Phone2() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className='section9'>
      <div className='choose'>
        <div className='choose1'>
          <h1>How to choose Perfect College</h1>
        </div>
        <div className={`step ${activeSlide === 0 ? 'active' : ''}`}>
          <h2>Step:1</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`step ${activeSlide === 1 ? 'active' : ''}`}>
          <h2>Step:2</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`step ${activeSlide === 2 ? 'active' : ''}`}>
          <h2>Step:3</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`step ${activeSlide === 3 ? 'active' : ''}`}>
          <h2>Step:4 </h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`step ${activeSlide === 4 ? 'active' : ''}`}>
          <h2>Step:5 </h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className='mob'>
        <Carousel
          showStatus={false}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={activeSlide}
          onChange={handleSlideChange}
        >
          <div className='mob1'>
            <img src={phone1} alt="" />
          </div>
          <div className='mob1'>
            <img src={phone1} alt="" />
          </div>
          <div className='mob1'>
            <img src={phone1} alt="" />
          </div>
          <div className='mob1'>
            <img src={phone1} alt="" />
          </div>
          <div className='mob1'>
            <img src={phone1} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Phone2;
