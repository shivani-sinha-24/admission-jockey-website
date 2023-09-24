import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CompareModalCollege = ({compareArray,clg,isOpen}) => {
    
  const [courses,setcourses] = useState()
  const college = useSelector(state=>state?.property?.property?.colleges)?.filter(item=>item._id==clg?._id)?.[0]
    
  useEffect(()=>{
      axios.post(`${import.meta.env.VITE_BASE_URL}/getCoursesForCollege`,{affilite_by:clg?.edu_type=='University'?[clg?.name]:clg?.affilite_by})
      .then(res=>setcourses(res?.data?.courses))
      .catch(err=>{})
  },[college,compareArray,isOpen,clg])

  return (
    <>
      {
        courses?.length>0 && courses.slice(0,1) && courses?.map(course=>{return<div className="d-bottom">
            <div className="d-b-left">{course?.full_name?.length > 25 ? course?.full_name?.substring(0, 25) + '...' : course?.full_name}</div>
            <div className="d-b-right">₹ {course?.fees}</div>
        </div>})
      }
    </>
  )
}

export default CompareModalCollege
