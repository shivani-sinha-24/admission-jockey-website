import React from 'react'
import './Compare2ndNav.css'
import { Link } from 'react-router-dom'

const Compare2ndNav = () => {
  return (
    <div className='compare-nav'>
      <Link to={`/`} className="logo" >
        <img src="https://admissionjockey.com/assets/images/admission-jockey-logo1-main.png" alt="" />
      </Link>
      <div className="menu">COLLEGES</div>
      <div className="menu">AJ SCHOOL</div>
    </div>
  )
}

export default Compare2ndNav
