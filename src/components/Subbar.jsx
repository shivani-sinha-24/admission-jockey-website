import React, { useState } from 'react'
import img1 from "../assets/images/woxenuni.jpeg"
import img2 from "../assets/images/dehradun.jpeg"
import img3 from "../assets/images/kolkata.jpeg"
import img4 from "../assets/images/pune.jpeg"
import naac from "../assets/images/naac.png"
import filterIcon from '../assets/filter icon.png'
import { useDispatch } from 'react-redux'
import { getCollegesForSelectedCourse } from '../../redux/Action/universityCourseAction'
// import { city,state,collegeType } from '../data/filterCategory/FilterCategory'

function Subbar({compareMultiClg,setCompareMultiClg,compareArray, setCompareArray, universityCourses, search, setSearch, Fees, setFees, City, setCity, State, setState, Type, setType, SelectedCourse, setSelectedCourse, collegeList, city, state, collegeType, ClearFilter, isOpen, setIsOpen }) {  

    const dispatch = useDispatch();

    var span = <i className="fa-solid fa-angle-down"></i>
    var span1 = <i className="fa-solid fa-angle-up"></i>
    const [ Down , setDown] = useState(span)
 
    const [viewFilters,setviewFilters] = useState(true)
 
    function Handlecity (event)  {
        setSearch('')
        setSelectedCourse('')
        const { name, checked } = event.target;

        if (checked) {
        setCity([...City, name]);
        }
        else {
            setCity(City.filter((type) => type !== name));
        }
    };

    function HandleState (event)  {
        setSearch('')
        setSelectedCourse('')
        const { name, checked } = event.target;

        if (checked) {
        setState([...State, name]);
        }
        else {
            setState(State.filter((type) => type !== name));
        }
    };

    function Handletype (event)  {
        setSearch('')
        setSelectedCourse('')
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
    }

    function removefilter (value){
        setCity(City.filter((type) => type !== value));
        if(search){
        setSearch('')
        }
        
    }

    function removefilter1 (value){
        setState(State.filter((type) => type !== value));
        if(search){
        setSearch('')
        }
    }
    function removefilter2 (value){
        setType(Type.filter((type) => type !== value));
        if(search){
        setSearch('')
        }
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
                    <select name="" id="" value={SelectedCourse} onChange={(e)=>{SelectedCourse!=''&&ClearFilter();setSearch('');setSelectedCourse(e.target.value); dispatch(getCollegesForSelectedCourse(e.target.value))}}>
                        <option value=""> Select Course</option>
                        {
                            universityCourses?.length>0 &&
                            universityCourses?.map((course,index)=><option key={index+1} value={course}> {course}</option>)
                        }
                        {/* <option value="Course1"> Course1</option>
                        <option value="course2">Course2</option>
                        <option value="Course3">Course3</option> */}
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
                                    city?.sort().map((city,index)=>
                                    <div key={index+1}>
                                        <input type="checkbox" id={city} name={city} onChange={Handlecity} checked= {City.includes(city)}  />
                                        <label htmlFor={city}>{city}</label> <br />
                                    </div>
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
                                    state?.sort().map((state,index)=>
                                        <div key={index+1}>
                                        <input type="checkbox" id={state} name={state} onChange={HandleState} checked= {State.includes(state)}  />
                                        <label htmlFor={state}>{state}</label> <br />
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                        </div>
                        <div className='college'>
                        <h3>College type</h3>
                        <div>
                            {
                                collegeType?.map((type,index)=>
                                    <div key={index+1}>
                                    <input type="checkbox" id={type} name={type} onChange={Handletype} checked= {Type.includes(type)}  />
                                    <label htmlFor={type}>{type}</label> <br />
                                    </div>
                                )
                            }
                        </div>
                        </div>
                        {/* <button type='submit' onClick={()=>handlesubmit()}>Apply Filters</button> */}
                    </form>
                </div>
            }
            <div className='manage2' style={{width:viewFilters?'80%':'100%'}}>
                {
                    collegeList?.length>0
                    ?
                    collegeList.map(college =>
                        <div className='slides' id={college?._id} key={college?._id}>
                            <div className='imgages'>
                                <div className='img1'>
                                    {/* <img src={img1} alt="" /> */}
                                    <img src={`${import.meta.env.VITE_BASE_URL}/${college?.image}`} alt="" />
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
                    :
                    <div className='no-colleges'>No colleges found</div>
                }
                {
                    collegeList?.length > 0 &&
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
                }
            </div>
        </div>
    </>
    )
}

export default Subbar


