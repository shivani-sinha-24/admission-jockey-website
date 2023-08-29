import React from 'react'
import logo from "../assets/logo1.png"
import { useNavigate } from 'react-router';


function Section1({search,setSearch}) {
    const navigate = useNavigate()
    
  return (
    <>
     <section className="sec1">
        <div className="subsec11"> 
            <div className="subsec11-heading">
            Over 6000+ Colleges & universities across India
            </div>
            <form action="">
                <input type="text" placeholder="Search..." value={search} onChange={e=>setSearch((e.target.value).trim())}/>
                <button 
                    onClick={e=>{
                        e.preventDefault();
                        search!=''? navigate('/search?query='+search) : navigate('/search');
                    }}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
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