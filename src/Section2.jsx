import React from 'react'
import EC1 from "./assets/images/EC1.jpeg"
import EC2 from "./assets/images/EC2.jpeg"
import EC3 from "./assets/images/EC3.jpeg"
import EC4 from "./assets/images/EC4.jpeg"
import EC5 from "./assets/images/EC5.jpeg"
import EC6 from "./assets/images/EC6.webp"





function Section2() {
  return (
   <>
   <div className='card'>

   {/* <h1>Explore Courses</h1> */}
<div className="explore-courses">
Explore Courses
</div>
   
   < div className='section2'>

   
   <div className='subsec21'>

<div className='subsec23'>
<img src={EC1} alt="target" />
<h2>Management and Business</h2>
<div className='subsec22'>
    <p>34 Course </p>
    <button>View Courses</button>
</div>

</div>


</div>


<div className='subsec21'>

<div className='subsec23'>
<img src={EC2} alt="target" />
<h2>Computers and Technology</h2>
<div className='subsec22'>
    <p>34 Course </p>
    <button>View Courses</button>
</div>

</div>


</div>

<div className='subsec21'>

<div className='subsec23'>
<img src={EC3} alt="target" />
<h2>Design and Animation</h2>
<div className='subsec22'>
    <p>34 Course </p>
    <button >View Courses</button>
</div>

</div>




</div>

<div className='subsec21'>

<div className='subsec23'>
<img src={EC4} alt="target" />
<h2>Medical</h2>
<div className='subsec22'>
    <p>34 Course </p>
    <button>View Courses</button>
</div>

</div>


</div>


<div className='subsec21'>

<div className='subsec23'>
<img src={EC5} alt="target" />
<h2>Pharmacy</h2>
<div className='subsec22'>
    <p>34 Course </p>
    <button>View Courses</button>
</div>

</div>


</div>

<div className='subsec21'>

<div className='subsec23'>
<img src={EC6} alt="target" />
<h2>Engineering</h2>
<div className='subsec22'>
    <p>34 Course </p>
    <button>View Courses</button>
</div>

</div>


</div>

    
   </div>

   <button className='outer'>view more</button>

   </div>
     
   </>
  
  )
}

export default Section2