import React from 'react'
import './ErrorPage.css'
import lost from '../../assets/1_Lloy0YTBSLoN8a3BbcbTig.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="error-page">
        <div className="container">
            <div className="illustration">
                <img src={lost} alt="Lost Astronaut"/>
            </div>
            <div className="content">
                <h1>404</h1>
                <p>Oops! It seems you've ventured into uncharted territory.</p>
                <Link to={'/'} className="button">Go Back Home</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage
