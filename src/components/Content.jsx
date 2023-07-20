import React from 'react'
import girl from "../assets/girl.jpg"
import boy from "../assets/men.jpg"
import logo from "../assets/logo.png"
import logo3 from "../assets/images/graphiceralogo.png"


function Content() {
  return (
    <div className='students'>

        <div className='count'>
            <h1>74,000+</h1>
            <h2>Students</h2>
            <h2>Across</h2>
            <h2>India</h2>
        </div>

        <div className='ach'>
             <div className='group'>
             <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='human'>
                <img src={boy}alt="" />
                <img src={logo} alt="" />
            </div>
            <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='human'>
                <img src={boy}alt="" />
                <img src={logo} alt="" />
            </div>
            <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='human'>
                <img src={boy}alt="" />
                <img src={logo} alt="" />
            </div>
             </div>
            
            <div className='group'>
            <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='human'>
                <img src={boy}alt="" />
                <img src={logo} alt="" />
            </div>
            <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='human'>
                <img src={boy}alt="" />
                <img src={logo} alt="" />
            </div>
            <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            
            </div>
             
             <div className='group'>
             <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='human'>
                <img src={boy}alt="" />
                <img src={logo} alt="" />
            </div>
            <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='human'>
                <img src={boy}alt="" />
                <img src={logo} alt="" />
            </div>
            <div className='human'>
                <img src={girl}alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='human'>
                <img src={boy}alt="" />
                <img src={logo} alt="" />
            </div>
             </div>
            
        </div>
    </div>
  )
}

export default Content