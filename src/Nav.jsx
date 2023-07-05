import React, { useState } from 'react'

function Nav() {
 const [Menu , setMenu] = useState("list")
 const [ShowHam , setShowHam] = useState("ham")

 function Showmenu (){
  setMenu("list1")
  setShowHam("ham1")

 }
 function Hidemenu (){
  setMenu("list")
  setShowHam("ham")

 }

  return (
    <>
     <nav className="navbar">
        <div className="navimg">
            <img src="https://admissionjockey.com/assets/images/admission-jockey-logo1-main.png" alt="Admission Jockey"/>
        </div>
        <div className="navitem">
            <ul>
                <li>Top universities</li>
                <li>Colleges</li>
                <li>Courses</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className={ShowHam} onClick={Showmenu}>
          <i className="fa-solid fa-bars"></i>
         
        </div>
        <div className={Menu}>
          <div className='cross' onClick={Hidemenu}>
            <h1><i className="fa-solid fa-xmark"></i></h1>
             
          </div>
           <div className='list2'>
           <ul>
                <li>Top universities</li>
                <li>Colleges</li>
                <li>Courses</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
           </div>
        </div>
    </nav>
    
    </>
  )
}

export default Nav