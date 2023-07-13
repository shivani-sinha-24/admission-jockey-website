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
import logo5 from "./assets/images/graphiceralogo.png"


function Slider4() {
  return (
    <div className='section8'>




{/* <h1 className='upartner'> Our Top online University Partners</h1> */}
<div className="upartner">Our Top online University Partners</div>

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
    {/* <h2>Featured Online Universities</h2> */}
    <div className="upartner">Featured Online Universities</div>


    <div className='ftuni'>

<Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={false} showArrows={false} >

    <div className='card2'>

        <div className='card21'>
            <div className='card211'>
            <img src={`https://www.edufever.com/wp-content/uploads/2022/04/Graphic-Era-University-Dehradun-jpg-webp.webp`} alt="" />
            </div>
           
            <div className='card22'>
                <div className='card221'>
                <img src={logo5} alt="" />
                </div>
                {/* <div className="card221" style={{ backgroundImage: `url(${logo5})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                <div className="card222">
                    
                <h4>Graphic Era University, Dehradun</h4>
                </div>
            </div>
            <hr />
            <div className='card23'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                <button>View details</button>
            </div>

            

        </div>

        <div className='card21'>
            <div className='card211'>
            <img src={`https://distanceeducationschool.com/wp-content/uploads/2022/05/pdypmc-navi-mumbai.png`} alt="" />
            </div>
            
            <div className='card22'>
                <div className='card221'>
                <img src={logo2} alt="" />
                </div>
                {/* <div className="card221" style={{ backgroundImage: `url(${logo2})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                <div className="card222">
                    
                <h4>DY Patil University</h4>
                </div>
            </div>
            <hr />
            <div className='card23'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                <button>View details</button>
            </div>

            

        </div>

        <div className='card21'>
            <div className='card211'>
            <img src={`https://www.euttaranchal.com/icms/cms-photos/Uttaranchal-University.webp`} alt="" />
            </div>
           
            <div className='card22'>
                <div className='card221'>
                <img src={logo4} alt="" />
                </div>
                
                {/* <div className="card221" style={{ backgroundImage: `url(${logo4})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 70%', backgroundRepeat:'no-repeat' }}></div> */}
                <div className="card222">
                    
                <h4>Uttaranchal Universitiy, Dehradun</h4>
                </div>
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
            <img src={`https://www.edufever.com/wp-content/uploads/2022/04/Graphic-Era-University-Dehradun-jpg-webp.webp`} alt="" />
            </div>
           
            <div className='card22'>
                <div className='card221'>
                <img src={logo5} alt="" />
                </div>
                {/* <div className="card221" style={{ backgroundImage: `url(${logo5})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                <div className="card222">
                    
                <h4>Graphic Era University, Dehradun</h4>
                </div>
            </div>
            <hr />
            <div className='card23'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                <button>View details</button>
            </div>

            

        </div>

        <div className='card21'>
            <div className='card211'>
            <img src={`https://distanceeducationschool.com/wp-content/uploads/2022/05/pdypmc-navi-mumbai.png`} alt="" />
            </div>
            
            <div className='card22'>
                <div className='card221'>
                <img src={logo2} alt="" />
                </div>
                {/* <div className="card221" style={{ backgroundImage: `url(${logo2})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                <div className="card222">
                    
                <h4>DY Patil University</h4>
                </div>
            </div>
            <hr />
            <div className='card23'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                <button>View details</button>
            </div>

            

        </div>

        <div className='card21'>
            <div className='card211'>
            <img src={`https://www.euttaranchal.com/icms/cms-photos/Uttaranchal-University.webp`} alt="" />
            </div>
           
            <div className='card22'>
                <div className='card221'>
                <img src={logo4} alt="" />
                </div>
                
                <div className="card221" style={{ backgroundImage: `url(${logo4})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 70%', backgroundRepeat:'no-repeat' }}></div>
                <div className="card222">
                    
                <h4>Uttaranchal Universitiy, Dehradun</h4>
                </div>
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
            <img src={`https://www.edufever.com/wp-content/uploads/2022/04/Graphic-Era-University-Dehradun-jpg-webp.webp`} alt="" />
            </div>
           
            <div className='card22'>
                <div className='card221'>
                <img src={logo5} alt="" />
                </div>
                {/* <div className="card221" style={{ backgroundImage: `url(${logo5})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                <div className="card222">
                    
                <h4>Graphic Era University, Dehradun</h4>
                </div>
            </div>
            <hr />
            <div className='card23'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                <button>View details</button>
            </div>

            

        </div>

        <div className='card21'>
            <div className='card211'>
            <img src={`https://distanceeducationschool.com/wp-content/uploads/2022/05/pdypmc-navi-mumbai.png`} alt="" />
            </div>
            
            <div className='card22'>
                <div className='card221'>
                <img src={logo2} alt="" />
                </div>
                {/* <div className="card221" style={{ backgroundImage: `url(${logo2})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                <div className="card222">
                    
                <h4>DY Patil University</h4>
                </div>
            </div>
            <hr />
            <div className='card23'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                <button>View details</button>
            </div>

            

        </div>

        <div className='card21'>
            <div className='card211'>
            <img src={`https://www.euttaranchal.com/icms/cms-photos/Uttaranchal-University.webp`} alt="" />
            </div>
           
            <div className='card22'>
                <div className='card221'>
                <img src={logo4} alt="" />
                </div>
                
                {/* <div className="card221" style={{ backgroundImage: `url(${logo4})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 70%', backgroundRepeat:'no-repeat' }}></div> */}
                <div className="card222">
                    
                <h4>Uttaranchal Universitiy, Dehradun</h4>
                </div>
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