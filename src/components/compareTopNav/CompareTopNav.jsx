import React from 'react'
import './CompareTopNav.css'
import { Link } from 'react-router-dom'

const CompareTopNav = () => {
  return (
    <div className='compare-top-nav'>
      <div className="left">
        <Link to={'/search'} className="left-menu">TOP UNIVERSITIES </Link>
        <Link to={'/search'} className="left-menu">COLLEGES </Link>
        <div className="left-menu">BLOG </div>      
      </div>
      <div className="right">Admission Partner Login</div>
    </div>
  )
}

export default CompareTopNav
