import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img from "./assets/images.jpg"
import img2 from "./assets/dummyimages/college.jpg"

function Slider1() {
  return (
    <section className='section3'>
 <h1>Special Programme</h1>

 <div className='c1'>

 <Carousel  infiniteLoop={true} showStatus={false} autoPlay={true}>

<div className='main2'>

<div className='box'>
   <img src={img} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
    
    <button className='first'>View Detais</button>
   </div>
</div>

<div className='box'>
   <img src={img2} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
    
    <button className='second'>View Detais</button>
   </div>
</div>

<div className='box'>
   <img src={img} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
    
    <button className='third'>View Detais</button>
   </div>
</div>

</div>

<div className='main2'>

<div className='box'>
   <img src={img2} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
    
    <button className='first'>View Detais</button>
   </div>
</div>

<div className='box'>
   <img src={img} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
    
    <button className='second'>View Detais</button>
   </div>
</div>

<div className='box'>
   <img src={img2} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
   
    <button className='third'>View Detais</button>
   </div>
</div>

</div>


<div className='main2'>

<div className='box'>
   <img src={img} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
    
    <button className='first'>View Detais</button>
   </div>
</div>

<div className='box'>
   <img src={img2} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
   
    <button className='second'>View Detais</button>
   </div>
</div>

<div className='box'>
   <img src={img} alt="" />
   <h2>Pay After Placement Program</h2>
   <div className='box1'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum ipsam voluptatibus rerum esse sit illo est eligendi excepturi expedita.</p>
    
    <button className='third'>View Detais</button>
   </div>
</div>

</div>


</Carousel>
</div>

    </section>
  )
}

export default Slider1



