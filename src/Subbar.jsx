import React, { useState } from 'react'
import img1 from "./assets/images/woxenuni.jpeg"
import img2 from "./assets/images/dehradun.jpeg"
import img3 from "./assets/images/kolkata.jpeg"
import img4 from "./assets/images/pune.jpeg"
import naac from "./assets/images/naac.png"

function Subbar() {
    
   
    const [Show , setShow] = useState("category")
    const [ Fees , setFees] = useState("0")
    const [City , setCity]=useState([])
    const [State , setState]=useState([])
    const [Type , setType]=useState([])
    const [ SelectedCourse , setSelectedCourse] = useState("")
    const [ width , setWidth] = useState("slides")

    var span = <i class="fa-solid fa-angle-down"></i>
    var span1 = <i class="fa-solid fa-angle-up"></i>
    const [ Down , setDown] = useState(span)
 

 

  function Handlecity (event)  {
    const { name, checked } = event.target;

    if (checked) {
      setCity([...City, name]);
    }
    else {
        setCity(City.filter((type) => type !== name));
      }
  };

  function HandleState (event)  {
    const { name, checked } = event.target;

    if (checked) {
      setState([...State, name]);
    }
    else {
        setState(State.filter((type) => type !== name));
      }
  };

  function Handletype (event)  {
    const { name, checked } = event.target;

    if (checked) {
      setType([...Type, name]);
    }
    else {
        setType(Type.filter((type) => type !== name));
      }
  };
 
 function handlesubmit (e){
    e.preventDefault()
    console.log(SelectedCourse , Fees*5000 , City , State ,Type)


 }


 function showmenu () {
if(Show==="category"){
    setShow("category1")
    setDown(span)
    setWidth("slides")
    
}
else{
    setShow("category")
    setDown(span1)
    setWidth (" slides1")
   

}
    // Show==="category"?setShow("category1"):setShow("category") 
    //  Down===span?setDown(span1):setDown(span)
 }

 function removefilter (value){
    setCity(City.filter((type) => type !== value));
    
 }

 function removefilter1 (value){
    setState(State.filter((type) => type !== value));
 }
 function removefilter2 (value){
    setType(Type.filter((type) => type !== value));
 }

  return (
    <>
    <div className='side'>

        <div className='leftside'>
        <h4 onClick={showmenu}><i className="fa-solid fa-bars"></i> <span>Filters</span> <span>{Down}</span></h4>
         
        </div>

        <div className='rightside'>
        <form action="" onSubmit={handlesubmit}>

            <select name="" id="" value={SelectedCourse} onChange={(e)=>{setSelectedCourse(e.target.value)}}>
                <option value="Course"  selected> Select Course</option>
                <option value="Course1"> Course1</option>
                <option value="course2">Course2</option>
                <option value="Course3">Course3</option>
            </select>
            </form>
             <div>
                <form action="" onSubmit={handlesubmit}>
                <label htmlFor="">FEES</label>
            <input type="range"  min="0" max="100" value={Fees} onChange={(e)=>{ setFees(e.target.value)}}/>
                </form>
               
            </div>

            <p>{ Number(Fees)*5000} INR</p>

        </div>
 







    </div>

    <div className='manage'>
    <div className={Show}>
<h3>Applied Filters</h3>
     
     <ul>
        {City.map((value , index)=>{
          return  <li key={index}>{value} <span onClick={()=>removefilter(value)}><i class="fa-solid fa-xmark"></i></span></li>
        })}
     </ul>

     
     <ul>
        {Type.map((value , index)=>{
          return  <li key={index}>{value}<span onClick={()=>removefilter2(value)}><i class="fa-solid fa-xmark"></i></span></li>
        })}
     </ul>

    
     <ul>
        {State.map((value , index)=>{
          return  <li key={index}>{value}<span onClick={()=>removefilter1(value)}><i class="fa-solid fa-xmark"></i></span></li>
        })}
     </ul>

    <form onSubmit={handlesubmit}>

    <div className='filtersapplied'>
   
      
        
</div>

<div className='city'>
<h3>City</h3>
<input type="checkbox" id="delhi" name="delhi" onChange={Handlecity} checked= {City.includes("delhi")}  />
<label for="delhi">Delhi</label> <br />
<input type="checkbox" id="jaipur" name="jaipur" onChange={Handlecity} checked= {City.includes("jaipur")}  />
<label for="jaipur">Jaipur</label> <br />
<input type="checkbox" id="gurugram" name="gurugram"  onChange={Handlecity} checked= {City.includes("gurugram")} />
<label for="gurugram">Gurugram</label> <br />
</div>

<div className='state'>
<h3>State</h3>
<input type="checkbox" id="rajsthan" name="rajsthan" onChange={HandleState} checked= {State.includes("rajsthan")}  />
<label for="rajsthan">rajsthan</label> <br />
<input type="checkbox" id="haryana" name="haryana"  onChange={HandleState} checked= {State.includes("haryana")}/>
<label for="haryana">harayana</label> <br />
<input type="checkbox" id="uttarpradesh" name="uttarpradesh"onChange={HandleState}  checked= {State.includes("uttarpradesh")}/>
<label for="uttarpradesh">uttarpradesh</label> <br />
</div>

<div className='college'>
<h3>College type</h3>
<input type="checkbox" id="private" name="private"   onChange={Handletype} checked= {Type.includes("private")}/>
<label for="private">private</label> <br />
<input type="checkbox" id="public" name="public"  onChange={Handletype} checked= {Type.includes("public")} />
<label for="public">public</label> <br />
<input type="checkbox" id="govt" name="govt"   onChange={Handletype}checked= {Type.includes("govt")}/>
<label for="govt">govt</label> <br />
</div>

<button type='submit'>Apply Filters</button>
    </form>

</div>

<div className='manage2'>
<div className={width}>
    <div className='imgages'>
        <div className='img1'>
            <img src={img1} alt="" />
        </div>
        <div className='img2'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            {/* <img src={img4} alt="" /> */}
            <div className='img3'>
                <p>view All</p>
            </div>
        </div>
    </div>

    <div className='content'>
        <h1>University of petroleum and energy studies </h1>
        <span>(Dehradun , Uttarakhand)</span>
        <div className='content1'>
            <button> <span><i class="fa-solid fa-star"></i></span>Student Choice</button>
           <div className='content12'>
           <span>Approved by:</span>
            <img src={naac} alt="" />
           </div>
           
        </div>
        <div className='content2'>
            <h2>BCA ₹15,00,000</h2>
            <button>Compare</button>
            <button>Apply Now</button>
        </div>
    </div>
</div>
<div className={width}>
    <div className='imgages'>
        <div className='img1'>
            <img src={img1} alt="" />
        </div>
        <div className='img2'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            {/* <img src={img4} alt="" /> */}
            <div className='img3'>
                <p>view All</p>
            </div>
        </div>
    </div>

    <div className='content'>
        <h1>Uttaranchal Institute of technology </h1>
        <span>(Dehradun , Uttarakhand)</span>
        <div className='content1'>
            <button> <span><i class="fa-solid fa-star"></i></span>Student Choice</button>
           <div className='content12'>
           <span>Approved by:</span>
            <img src={naac} alt="" />
           </div>
           
        </div>
        <div className='content2'>
            <h2>BCA ₹6,00,000</h2>
            <button>Compare</button>
            <button>Apply Now</button>
        </div>
    </div>
</div>
<div className={width}>
    <div className='imgages'>
        <div className='img1'>
            <img src={img1} alt="" />
        </div>
        <div className='img2'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            {/* <img src={img4} alt="" /> */}
            <div className='img3'>
                <p>view All</p>
            </div>
        </div>
    </div>

    <div className='content'>
        <h1>Graphic Era University </h1>
        <span>(Dehradun , Uttarakhand)</span>
        <div className='content1'>
            <button> <span><i class="fa-solid fa-star"></i></span>Student Choice</button>
           <div className='content12'>
           <span>Approved by:</span>
            <img src={naac} alt="" />
           </div>
           
        </div>
        <div className='content2'>
            <h2>BCA ₹6,00,000</h2>
            <button>Compare</button>
            <button>Apply Now</button>
        </div>
    </div>
</div>
<div className={width}>
    <div className='imgages'>
        <div className='img1'>
            <img src={img1} alt="" />
        </div>
        <div className='img2'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            {/* <img src={img4} alt="" /> */}
            <div className='img3'>
                <p>view All</p>
            </div>
        </div>
    </div>

    <div className='content'>
        <h1>Woxen University Hyderabad </h1>
        <span>(Hyderabad , Andrapradesh)</span>
        <div className='content1'>
            <button> <span><i class="fa-solid fa-star"></i></span>Student Choice</button>
           <div className='content12'>
           <span>Approved by:</span>
            <img src={naac} alt="" />
           </div>
           
        </div>
        <div className='content2'>
            <h2>BCA ₹6,00,000</h2>
            <button>Compare</button>
            <button>Apply Now</button>
        </div>
    </div>
</div>
<div className={width}>
    <div className='imgages'>
        <div className='img1'>
            <img src={img1} alt="" />
        </div>
        <div className='img2'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            {/* <img src={img4} alt="" /> */}
            <div className='img3'>
                <p>view All</p>
            </div>
        </div>
    </div>

    <div className='content'>
        <h1>K.R. Mangalam University </h1>
        <span>(Gurugaon , harayana)</span>
        <div className='content1'>
            <button> <span><i class="fa-solid fa-star"></i></span>Student Choice</button>
           <div className='content12'>
           <span>Approved by:</span>
            <img src={naac} alt="" />
           </div>
           
        </div>
        <div className='content2'>
            <h2>BCA ₹6,00,000</h2>
            <button>Compare</button>
            <button>Apply Now</button>
        </div>
    </div>
</div>
<div className={width}>
    <div className='imgages'>
        <div className='img1'>
            <img src={img1} alt="" />
        </div>
        <div className='img2'>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            {/* <img src={img4} alt="" /> */}
            <div className='img3'>
                <p>view All</p>
            </div>
        </div>
    </div>

    <div className='content'>
        <h1>Sai Group of Institutions </h1>
        <span>(Dehradun , Uttarakhand)</span>
        <div className='content1'>
            <button> <span><i class="fa-solid fa-star"></i></span>Student Choice</button>
           <div className='content12'>
           <span>Approved by:</span>
            <img src={naac} alt="" />
           </div>
           
        </div>
        <div className='content2'>
            <h2>BCA ₹4,00,000</h2>
            <button>Compare</button>
            <button>Apply Now</button>
        </div>
    </div>
</div>
</div>
    </div>



</>
  )
}

export default Subbar


