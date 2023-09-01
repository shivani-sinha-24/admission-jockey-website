import React, { useEffect, useState } from 'react'
import './DetailNav.css'

const DetailNav = ({detailNavdropdown,setDetailNavDropdown}) => {

  const style = {
    backgroundImage: `url(${'https://admissionjockey.com/assets/images/admission-jockey-logo1-main.png'})`
  }
  
  return (
    <div className='detail-nav'>
        <div className="web-logo" style={style}>
          {/* <img src="https://admissionjockey.com/assets/images/admission-jockey-logo1-main.png" alt="" /> */}
        </div>
        <div className="detail-nav-right">
            <div className="detail-nav-items nav-item-xl">College</div>
            <div className="detail-nav-items nav-item-xl">Courses</div>
            <div className="detail-nav-items nav-item-xl">About us</div>
            <div className="detail-nav-items nav-item-xl">Contact us</div>
            <i className="fa-solid fa-bars nav-item-xs-sm-md-lg" onClick={()=>setDetailNavDropdown(!detailNavdropdown)}></i>
        </div>
    </div>
  )
}

export default DetailNav
