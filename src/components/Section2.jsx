import React, { useState } from 'react'
import EC1 from "../assets/images/EC1.jpeg"
import EC2 from "../assets/images/EC2.jpeg"
import EC3 from "../assets/images/EC3.jpeg"
import EC4 from "../assets/images/EC4.jpeg"
import EC5 from "../assets/images/EC5.jpeg"
import EC6 from "../assets/images/EC6.webp"
import { useNavigate } from 'react-router-dom'





function Section2({universityCourses}) {
    const navigate = useNavigate()
    const [viewmore,setviewmore] = useState(false)
    const list = viewmore?universityCourses:universityCourses?.slice(0,6)
  return (
   <>
   <div className='card'>

   {/* <h1>Explore Courses</h1> */}
<div className="explore-courses">
Explore Courses
</div>
   
   < div className='section2'>
{
    list?.length>0 &&
    list?.map(course=>
    <div className='subsec21'>
        <div className='subsec23'>
            <img src={EC1} alt="target" />
            <div className="subsec23-h1">
                <h2>{course?.full_name}</h2>
            </div>
            <div className='subsec22'>
                <p>34 Course </p>
                <button onClick={e=>console.log(course.name)}>View Courses</button>
            </div>
        </div>
    </div>
    )
}
   
   </div>

   <button className='outer' onClick={()=>setviewmore(!viewmore)}>view {viewmore?'less':'more'}</button>

   </div>
     
   </>
  
  )
}

export default Section2