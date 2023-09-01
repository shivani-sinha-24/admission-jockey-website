import React from 'react'
import './PredictorNav.css'
import { Link } from 'react-router-dom'

const PredictorNav = ({reset,rotate}) => {
  return (
    <div className='predictor-nav'>
        <Link to={'/'} className="p-nav-left">
            <img src="https://admissionjockey.com/assets/images/admission-jockey-logo1-main.png" alt="" />
        </Link>
        <div className="p-nav-right">
            <button>Sign in</button>
            <i className={`fa-solid fa-lg fa-rotate-right ${rotate?'rotate':''} `}style={{color:'rgb(50, 8, 87,1)'}} onClick={()=>reset()}></i>
        </div>
    </div>
  )
}

export default PredictorNav
