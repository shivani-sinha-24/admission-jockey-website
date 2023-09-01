import React from 'react'
import './CompareDesc.css'
import { Link } from 'react-router-dom'

const CompareDesc = () => {
  return (
    <div className='compare-desc'>
      <div className="breadcrumb">
        <Link to="/">Admissionjockey</Link>
        <span className="breadcrumb-separator"><i className="fa-solid fa-angles-right"></i></span>
        <Link >Compare</Link>
        <span className="breadcrumb-separator"><i className="fa-solid fa-angles-right"></i></span>
        <Link >Colleges</Link>
      </div>
      <div className="description">
        <p>Compare College</p>
        <p>Compare College on their Fees, Placements, Cut Off, Reviews, Seats, Couses and other detains. Download free information on admission details, placement report, Eligibility criteria etc.</p>
      </div>
    </div>
  )
}

export default CompareDesc
