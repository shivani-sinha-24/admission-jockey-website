import React, { useEffect } from 'react'
import './DetailMembership.css'
import Naac from '../../assets/images/naac.png'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCollegeList } from '../../../redux/Action/PropertyAction'

const DetailMembership = () => {
  
  const params = useParams()
  const dispatch = useDispatch()
  const college = useSelector(state=>state?.property?.property?.colleges)?.filter(clg=>clg._id==params?.clgid)?.[0]

  useEffect(()=>{
    dispatch(getCollegeList());
  },[params?.clgid])
  return (
    <div className="detail-membership">
        <div className="membership">
            <div className="bottom-left">Accreditation and Membership</div>
            <div className="bottom-right">
                <img src={Naac} alt="" />
                <img src={Naac} alt="" />
                <img src={Naac} alt="" />
                <img src={Naac} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DetailMembership
