import React, { useEffect, useState } from 'react'
import img2 from '../../assets/images/dehradun.jpeg'
import img3 from "../../assets/images/kolkata.jpeg"
import naac from "../../assets/images/naac.png"
import axios from 'axios'

const SearchPageCollege = ({college}) => {
    const [gallery,setgallery] = useState([])
    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/getGallery/${college?._id}`)
        .then(res=>setgallery(res?.data?.gallery))
        .catch(err=>{})
        
    },[college])
    
  return (
    <div className='slides' id={college?._id} key={college?._id}>
        <div className='imgages'>
            <div className='img1'>
                {/* <img src={img1} alt="" /> */}
                <img src={`${import.meta.env.VITE_BASE_URL}/${college?.image}`} alt="" />
            </div>
            <div className='img2'>
                <img src={gallery[0]?import.meta.env.VITE_BASE_URL+'/'+gallery[0]:img2} alt="" />
                <img src={gallery[1]?import.meta.env.VITE_BASE_URL+'/'+gallery[1]:img3} alt="" />
                <div className='img3'>
                    <p>View All</p>
                </div>
            </div>
        </div>
        <div className='content'>
            <div className="content-top">
            <h1>{college?.name||'University of Petroleum and Energy Studies '}</h1>
            <span>
                (
                    { college?.property_district } {college?.property_district && college?.property_state && ' ,'} { college?.property_state }
                )
            </span>
            </div>
            <div className='content1'>
                {/* <button> <span><i className="fa-solid fa-star"></i></span>Student Choice</button> */}
                <button>
                <i className="fa-solid fa-star"></i><span>Student Choice</span>
                </button>
                <div className='content12'>
                    <div>
                        <span>Approved by:</span>
                        <img src={naac} alt="" />
                    </div>
                </div>
            </div>
            <div className='content2'>
                <h2>BCA ₹15,00,000</h2>
                <div className="buttons">
                    <button onClick={(e)=>{
                        e.preventDefault();
                        const updatedCompareArray = [...compareArray, college];
                        setCompareArray(updatedCompareArray);
                        setCompareMultiClg(true);
                        setIsOpen(true);
                    }}>Compare</button>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPageCollege
