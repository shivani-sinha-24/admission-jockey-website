import React, { useEffect } from 'react'
import './DetailMainContent.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCollegeList } from '../../../redux/Action/PropertyAction'

const DetailMainContent = () => {
  
  const params = useParams()
  const dispatch = useDispatch()
  const college = useSelector(state=>state?.property?.property?.colleges)?.filter(clg=>clg._id==params?.clgid)?.[0]

  useEffect(()=>{
    dispatch(getCollegeList());
  },[params?.clgid])

  return (
    <div className='detail-main-content'>
      <div className="top">
        <div className="top-item">Info</div>
        <div className="top-item">Course & fees</div>
        <div className="top-item">Gallery</div>
        <div className="top-item">Hostel</div>
        <div className="top-item">Ranking</div>
        <div className="top-item">Scholarship</div>
        <div className="top-item">Q & A</div>
        <div className="top-item">Other</div>
      </div>
    </div>
  )
}

export default DetailMainContent
