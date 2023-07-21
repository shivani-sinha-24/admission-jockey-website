import React, { useState } from 'react'
import img1 from "../assets/images/woxenuni.jpeg"
import img2 from "../assets/images/dehradun.jpeg"
import img3 from "../assets/images/kolkata.jpeg"
import img4 from "../assets/images/pune.jpeg"
import naac from "../assets/images/naac.png"
import filterIcon from '../assets/filter icon.png'
import { city,state,collegeType } from '../data/filterCategory/FilterCategory'

function Subbar() {
   
    // const [show , setShow] = useState(false)
    const [ Fees , setFees] = useState("0")
    const [City , setCity]=useState([])
    const [State , setState]=useState([])
    const [Type , setType]=useState([])
    const [ SelectedCourse , setSelectedCourse] = useState("")
    // const [ width , setWidth] = useState("slides")

    var span = <i className="fa-solid fa-angle-down"></i>
    var span1 = <i className="fa-solid fa-angle-up"></i>
    const [ Down , setDown] = useState(span)
 
    const [viewFilters,setviewFilters] = useState(true)
 

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


//  function showmenu () {
// if(Show==="category"){
//     setShow("category1")
//     setDown(span)
//     setWidth("slides")
    
// }
// else{
//     setShow("category")
//     setDown(span1)
//     setWidth (" slides1")
   

// }
//     // Show==="category"?setShow("category1"):setShow("category") 
//     //  Down===span?setDown(span1):setDown(span)
//  }

 function removefilter (value){
    setCity(City.filter((type) => type !== value));
    
 }

 function removefilter1 (value){
    setState(State.filter((type) => type !== value));
 }
 function removefilter2 (value){
    setType(Type.filter((type) => type !== value));
 }
 const ClearFilter = ()=>{
    setCity([]);
    setState([]);
    setType([]);
 }

  return (
    <>
    <div className='side'>
        <div className='leftside'  onClick={()=>setviewFilters(!viewFilters)}>
            <img src={filterIcon} alt="" className='filter-icon' />
            <span>Filters </span>
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
    <div className='manage' style={{width:'100%'}}>
        {
            viewFilters &&
            <div className='filter-container' style={{width:viewFilters?'20%':'0%'}}>
                <div className='filtersapplied'>
                    <div>
                        <h3>Applied Filters</h3>
                        { 
                            City.length>0 || State.length>0 || Type.length>0
                            ? <button onClick={()=>ClearFilter()}> clear all <i className="fa-solid fa-xmark"></i></button> 
                            : null
                        }
                    </div>
                    {/* <div> */}
                        <ul>
                            {
                                City.map((value , index)=>{
                                return  <li key={index}>{value} <span onClick={()=>removefilter(value)}><i className="fa-solid fa-xmark"></i></span></li>
                                })
                            }
                        </ul>
                        <ul>
                            {
                                Type.map((value , index)=>{
                                return  <li key={index}>{value}<span onClick={()=>removefilter2(value)}><i className="fa-solid fa-xmark"></i></span></li>
                                })
                            }
                        </ul>                            
                        <ul>
                            {
                                State.map((value , index)=>{
                                return  <li key={index}>{value}<span onClick={()=>removefilter1(value)}><i className="fa-solid fa-xmark"></i></span></li>
                                })
                            }
                        </ul>
                    {/* </div> */}
                </div>
                <form onSubmit={handlesubmit}>
                    <div className="city-filters">
                            <div className='city'>
                            <h3>City</h3>
                            <div>
                            {
                                city?.sort().map(city=>
                                <>
                                    <input type="checkbox" id={city} name={city} onChange={Handlecity} checked= {City.includes(city)}  />
                                    <label htmlFor={city}>{city}</label> <br />
                                </>
                                )
                            }
                            </div>
                        </div>
                    </div>
                    <div className="state-filters">
                        <div className='state'>
                            <h3>State</h3>
                            <div>
                            {
                                state?.sort().map(state=>
                                    <>
                                    <input type="checkbox" id={state} name={state} onChange={HandleState} checked= {State.includes(state)}  />
                                    <label htmlFor={state}>{state}</label> <br />
                                    </>
                                )
                            }
                            </div>
                        </div>
                    </div>
                    <div className='college'>
                    <h3>College type</h3>
                    <div>
                        {
                            collegeType?.map(type=>
                                <>
                                <input type="checkbox" id={type} name={type} onChange={Handletype} checked= {Type.includes(type)}  />
                                <label htmlFor={type}>{type}</label> <br />
                                </>
                            )
                        }
                    </div>
                    </div>
                    <button type='submit' onClick={()=>handlesubmit()}>Apply Filters</button>
                </form>
            </div>
        }
        <div className='manage2' style={{width:viewFilters?'80%':'100%'}}>
            <div className='slides'>
                <div className='imgages'>
                    <div className='img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='img2'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <div className='img3'>
                            <p>View All</p>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className="content-top">
                    <h1>University of Petroleum and Energy Studies </h1>
                    <span>(Dehradun , Uttarakhand)</span>
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
                            <button>Compare</button>
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slides'>
                <div className='imgages'>
                    <div className='img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='img2'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <div className='img3'>
                            <p>View All</p>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <h1>Uttaranchal Institute of Technology </h1>
                    <span>(Dehradun , Uttarakhand)</span>
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
                        <h2>BCA ₹6,00,000</h2>
                        <div className="buttons">
                            <button>Compare</button>
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slides'>
                <div className='imgages'>
                    <div className='img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='img2'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <div className='img3'>
                            <p>View All</p>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <h1>Graphic Era University </h1>
                    <span>(Dehradun , Uttarakhand)</span>
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
                        <h2>BCA ₹6,00,000</h2>
                        <div className="buttons">
                            <button>Compare</button>
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slides'>
                <div className='imgages'>
                    <div className='img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='img2'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <div className='img3'>
                            <p>View All</p>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <h1>Woxen University Hyderabad </h1>
                    <span>(Hyderabad , Andrapradesh)</span>
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
                        <h2>BCA ₹6,00,000</h2>
                        <div className="buttons">
                            <button>Compare</button>
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slides'>
                <div className='imgages'>
                    <div className='img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='img2'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <div className='img3'>
                            <p>View All</p>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <h1>K.R. Mangalam University </h1>
                    <span>(Gurugaon , harayana)</span>
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
                        <h2>BCA ₹6,00,000</h2>
                        <div className="buttons">
                            <button>Compare</button>
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slides'>
                <div className='imgages'>
                    <div className='img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='img2'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <div className='img3'>
                            <p>View All</p>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <h1>Sai Group of Institutions </h1>
                    <span>(Dehradun , Uttarakhand)</span>
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
                        <h2>BCA ₹4,00,000</h2>
                        <div className="buttons">
                            <button>Compare</button>
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lower'>
                <div className='lower2'>
                    <button> Next page <i className="fa-solid fa-arrow-right"></i> </button>
                </div>
                <div className='lower1'>
                    <span>Page</span>
                    <button>1</button>
                    <span>of 200</span>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Subbar


