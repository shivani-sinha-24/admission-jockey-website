import React, { useEffect } from 'react'
import './DetailCollegeImg.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCollegeList } from '../../../redux/Action/PropertyAction'

const DetailCollegeImg = () => {
  
  const params = useParams()
  const dispatch = useDispatch()
  const college = useSelector(state=>state?.property?.property?.colleges)?.filter(clg=>clg._id==params?.clgid)?.[0]

  useEffect(()=>{
    dispatch(getCollegeList());
  },[params?.clgid])

  const clgImg = {
    backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${college?.image})`
  }

  return (
    <div className='clg-img' style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${college?.image})`}}>
      <div className="clg-img-top">
        <div className="top-left">
          <img src={`${import.meta.env.VITE_BASE_URL}/${college?.logo}`} alt="" />
        </div>
        <div className="top-right">
          <p className="p1">{college?.name},</p>
          <p className="p2"><i className="fa-solid fa-location-dot" ></i>{college?.property_district}</p>
        </div>
      </div>
      <div className="clg-img-btns">
        <button className="btn1"><i className="fa-solid fa-download"></i>Brochure</button>
        <button className="btn2">Apply Now</button>
      </div>
    </div>
  )
}

export default DetailCollegeImg
