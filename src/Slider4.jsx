import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img from "./assets/bagaloe.jpg"
import img1 from "./assets/dehradun.jpg"
import img2 from "./assets/delhi.jpg"
import img3 from "./assets/hyd.jpg"
import logo1 from "./assets/images/UPESLOGO.jpeg"
import logo2 from "./assets/images/Woxenlogo.jpeg"
import logo3 from "./assets/images/graphiceralogo.png"
import logo4 from "./assets/images/utranchellogo.jpeg"

function Slider4() {
  return (
    <div className='section8'>




{/* <h1 className='upartner'> Our Top onlline University Partners</h1> */}
<div className="upartner">Our Top onlline University Partners</div>

<div className='partners'>
<Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
                <div className='uni'>
                    <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                    
                </div>
                <div className='uni'>
                <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                    
                </div>
                <div className='uni'>
                <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                   
                </div>
                <div className='uni'>
                <img src={logo1} />
                    <img src={logo2} />
                    <img src={logo3} />
                    <img src={logo4} />
                   
                </div>
            </Carousel>


</div>

<div className='featured'>
    {/* <h2>Featured  online  Universities</h2> */}
    <div className="upartner">Featured  online  Universities</div>


    <div className='ftuni'>

    <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}showArrows={false} >

        <div className='card2'>

            <div className='card21'>
                <div className='card211'>
                <img src={img} alt="" />
                </div>
               
                <div className='card22'>
                    <div className='card221'>
                    <img src={img1} alt="" />
                    </div>
                    
                    <h4>Universitiy of petrolium and energy studies</h4>
                </div>
                <hr />
                <div className='card23'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                    <button>View details</button>
                </div>

                

            </div>

            <div className='card21'>
                <div className='card211'>
                <img src={img2} alt="" />
                </div>
                
                <div className='card22'>
                    <div className='card221'>
                    <img src={img3} alt="" />
                    </div>
                   
                    <h4>Universitiy of petrolium and energy studies</h4>
                </div>
                <hr />
                <div className='card23'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                    <button>View details</button>
                </div>

                

            </div>

            <div className='card21'>
                <div className='card211'>
                <img src={img2} alt="" />
                </div>
               
                <div className='card22'>
                    <div className='card221'>
                    <img src={img1} alt="" />
                    </div>
                  
                    <h4>Universitiy of petrolium and energy studies</h4>
                </div>
                <hr />
                <div className='card23'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                    <button>View details</button>
                </div>

                

            </div>


        </div>


        <div className='card2'>

<div className='card21'>
    <div className='card211'>
    <img src={img} alt="" />
    </div>
   
    <div className='card22'>
        <div className='card221'>
        <img src={img1} alt="" />
        </div>
        
        <h4>Universitiy of petrolium and energy studies</h4>
    </div>
    <hr />
    <div className='card23'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
        <button>View details</button>
    </div>

    

</div>

<div className='card21'>
    <div className='card211'>
    <img src={img2} alt="" />
    </div>
    
    <div className='card22'>
        <div className='card221'>
        <img src={img3} alt="" />
        </div>
       
        <h4>Universitiy of petrolium and energy studies</h4>
    </div>
    <hr />
    <div className='card23'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
        <button>View details</button>
    </div>

    

</div>

<div className='card21'>
    <div className='card211'>
    <img src={img2} alt="" />
    </div>
   
    <div className='card22'>
        <div className='card221'>
        <img src={img1} alt="" />
        </div>
      
        <h4>Universitiy of petrolium and energy studies</h4>
    </div>
    <hr />
    <div className='card23'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
        <button>View details</button>
    </div>

    

</div>


</div>



<div className='card2'>

<div className='card21'>
    <div className='card211'>
    <img src={img} alt="" />
    </div>
   
    <div className='card22'>
        <div className='card221'>
        <img src={img1} alt="" />
        </div>
        
        <h4>Universitiy of petrolium and energy studies</h4>
    </div>
    <hr />
    <div className='card23'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
        <button>View details</button>
    </div>

    

</div>

<div className='card21'>
    <div className='card211'>
    <img src={img2} alt="" />
    </div>
    
    <div className='card22'>
        <div className='card221'>
        <img src={img3} alt="" />
        </div>
       
        <h4>Universitiy of petrolium and energy studies</h4>
    </div>
    <hr />
    <div className='card23'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
        <button>View details</button>
    </div>

    

</div>

<div className='card21'>
    <div className='card211'>
    <img src={img2} alt="" />
    </div>
   
    <div className='card22'>
        <div className='card221'>
        <img src={img1} alt="" />
        </div>
      
        <h4>Universitiy of petrolium and energy studies</h4>
    </div>
    <hr />
    <div className='card23'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
        <button>View details</button>
    </div>

    

</div>


</div>



    </Carousel>

    </div>
   


</div>

<div >

    <button className='vm'>view more</button>
</div>
    </div>
  )
}

export default Slider4