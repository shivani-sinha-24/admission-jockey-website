import React from 'react'
import logo from "./assets/logo1.png"


function Section1() {
  return (
    <>
     <section className="sec1">

<div className="subsec11"> 
<div className="subsec11-heading">
Over 6000+ Colleges & universities across India
</div>
        {/* <div className='number-h1'>Over 6000+ Colleges & universities across india</div> */}
    <form action="">
        <input type="text" placeholder="Search..."/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
</div>

<div className="subsec12">
    <span>Colleges</span>
    <span>Universities</span>
    <span>Courses</span>
    <span>Exams</span>
</div>

<div className="subsec13">

    <div className="subsec131">
        <div className='logo'>
            <img src={logo} alt="number"/>
        </div>
        <div className='number'>
            <div className='number-h1'>5k+</div>
            <p>Total Colleges</p>
        </div>

    </div>

    <div className="subsec131">
        <div className='logo'>
            <img src={logo} alt="number"/>
        </div>
        <div className='number'>
            <div className='number-h1'>8k+</div>
            <p>Total Courses</p>
        </div>

    </div>

    <div className="subsec131">
        <div className='logo'>
            <img src={logo} alt="number"/>
        </div>
        <div className='number'>
            <div className='number-h1'>50k+</div>
            <p>Total Counsellors</p>
        </div>

    </div>

    <div className="subsec131">
        <div className='logo'>
            <img src={logo} alt="number"/>
        </div>
        <div className='number'>
            <div className='number-h1'>50k+</div>
            <p>Total Counsellors</p>
        </div>

    </div>

</div>


</section>
    </>
  )
}

export default Section1