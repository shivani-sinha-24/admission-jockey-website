import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './DetailMainContent.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCollegeList } from '../../../redux/Action/PropertyAction'
// import { getHostel, getScholarship } from '../../../redux/Action/universityCourseAction';
import axios from 'axios';
import girl from '../../assets/girl-removebg-preview.png'
import bed from '../../assets/hostel_bed.png'

const DetailMainContent = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const params = useParams()
  const dispatch = useDispatch()
  const college = useSelector(state=>state?.property?.property?.colleges)?.filter(clg=>clg._id==params?.clgid)?.[0]
  // const scholarshipdetail = useSelector(state=>state?.university?.scholarship) 
  // const hosteldetail = useSelector(state=>state?.university?.hostel) 

  const [scholarshipdetail,setscholarshipdetail] = useState()
  const [hosteldetail,sethosteldetail] = useState()
  const [gallery,setgallery] = useState()
  const [courses,setcourses] = useState()
  const [searchQuery, setSearchQuery] = useState('');
  const [slides,setSlides] = useState([])
  const [moreinfo,setmoreinfo] = useState(false)
  const [morescholarship,setmorescholarship] = useState(false)


  useEffect(()=>{
    if(params?.clgid){
      dispatch(getCollegeList());
      // dispatch(getScholarship(params?.clgid))
      // dispatch(getHostel(params?.clgid ))
      axios.get(`${import.meta.env.VITE_BASE_URL}/getScholarship/${params?.clgid}`)
      .then(res=>setscholarshipdetail(res?.data?.scholarship))
      .catch(err=>{})

      axios.get(`${import.meta.env.VITE_BASE_URL}/getHostel/${params?.clgid}`)
      .then(res=>sethosteldetail(res?.data?.hostel))
      .catch(err=>{})

      axios.get(`${import.meta.env.VITE_BASE_URL}/getGallery/${params?.clgid}`)
      .then(res=>setgallery(res?.data?.gallery))
      .catch(err=>{})

      axios.post(`${import.meta.env.VITE_BASE_URL}/getCoursesForCollege`,{affilite_by:college?.edu_type=='University'?[college?.name]:college?.affilite_by})
      .then(res=>setcourses(res?.data?.courses))
      .catch(err=>{})
    }
  },[params?.clgid])

  function createSlides(courses, coursesPerSlide) {
    // Function to create slides with 4 courses each
    const slides = [];
    let courseList = searchQuery ? courses?.filter(course=>course?.full_name?.toLowerCase()?.includes(searchQuery?.toLowerCase())): courses
    for (let i = 0; i < courseList?.length; i += coursesPerSlide) {
      const slide = courseList?.slice(i, i + coursesPerSlide);
      slides?.push(slide);
    }
    return (slides);
  }

  // Create slides with 4 courses each and set the state
  useEffect(() => {
    const newSlides = createSlides(courses, 4);
    setSlides(newSlides);
  }, [searchQuery,courses]); 

  return (
    <div className='detail-main-content'>
      <div className="top">
        <a href='#info' className="top-item">Info</a>
        <a href='#courses-details' className="top-item">Course & fees</a>
        <a href='#gallery' className="top-item">Gallery</a>
        <a href='#hostel' className="top-item">Hostel</a>
        {/* <a href='#' className="top-item">Ranking</a> */}
        <a href='#scholarship' className="top-item">Scholarship</a>
        {/* <a href='#' className="top-item">Q & A</a> */}
        <a href='#other' className="top-item">Other</a>
      </div>
      <div className="info" id='info'>
        <h1 className="name">{college?.name}</h1>
        {college?.description && 
        <div className="desc" dangerouslySetInnerHTML={{__html:!moreinfo && college?.description?.length>500?college?.description?.slice(0,500)+'...':college?.description}}>
          {/* {!moreinfo && college?.description?.length>500?college?.description?.replace(/<[^>]*>/g, '').slice(0,500)+'...':college?.description?.replace(/<[^>]*>/g, '')} */}
          </div>}
        <div className="view" onClick={()=>setmoreinfo(!moreinfo)}>
          <span>{`View ${moreinfo?'Less':'More'}`} </span>
          <i className={`fa-solid fa-chevron-${moreinfo?'up':'down'}`} style={{display:'inline-block'}}> </i>
        </div>
      </div>
      <div className="courses-details" id="courses-details">
        <div className="search-course">
          <input type="text" placeholder= '&#x1F50D; Seacrh Courses...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <Carousel
          infinite={true}
          showDots={true}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          responsive={responsive}
          containerclassName="carousel-container"
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
        >
          {
            slides?.length > 0 &&
            slides?.map((slide,index)=>
            <div className="parent" key={index+Math.random()}>
              {
                slide?.map(course=>
                <div className="child" key={course?._id}>            
                <div className="c-top">
                  <div className="c-top-left">
                    <div className="c-t-l-p1">{course?.full_name}</div>
                    <div className="c-t-l-p2" dangerouslySetInnerHTML={{__html:`Eligibility: ${course?.eligibilty}`}}></div>
                  </div>
                  <div className="c-top-right">
                    <div className="c-t-r-p1">₹ {course?.fees}</div>
                    <div className="c-t-r-p2">(1st Year Fees)</div>
                  </div>
                </div>
                <div className="c-bottom">Apply Now</div>
              </div>)
              }
            </div>)
          }
        </Carousel>
        {slides?.length == 0 && <div style={{padding:'50px 0',margin:'0 auto',textAlign:'center',fontSize:'larger',fontWeight:'bolder'}}>No Course Found</div> }
      </div>
      {
        gallery?.length>0 &&
        <div className="gallery" id="gallery">
          <div className="heading">College Image Gallery</div>
          <div className="gallery-images">
          {
            gallery?.slice(0, 8).map(image=><img src={`${import.meta.env.VITE_BASE_URL}/${image}`} alt='' className="image"></img>)
          }
          </div>
        </div>
      }
      {
        hosteldetail?.length>0 &&
        <div className="hostel" id="hostel">
          <div className="left">
            <img src={bed} alt="" />
            <div>Hostel</div>
          </div>
          <div className="right">
            {
              hosteldetail?.map(hostel=>
              <div className="r-hostel" key={hostel?._id}>
                <h3 className="h-name">{hostel?.title}</h3>            
                <div className="h-name"> <b>Fees :</b> ₹ {hostel?.fees}/- </div>
                {hostel?.description && 
                <div className="h-name"dangerouslySetInnerHTML={{ __html: hostel?.description }}>
                  {/* {hostel?.description?.replace(/<[^>]*>/g, '')} */}
                </div>}
              </div>)
            }
          </div>
        </div>
      }
      {
        scholarshipdetail && 
        <div className="scholarship" id="scholarship">
          <div className="s-top">
            <div className="left">
              <img src={girl} alt="" />
            </div>
            <div className="right">
              <div className="p1">GIRL SCHOLARSHIP</div>
              <div className="p2">20% Scholarship for Girls Students for Intake in Undergraduate Programs at {college?.short_name} for Accademic Year {new Date().getFullYear()}-{(new Date().getFullYear()+1).toString().slice(2)}</div>
            </div>
          </div>
          <div className="bottom">
              {scholarshipdetail?.description && 
              <div className="s-desc" dangerouslySetInnerHTML={{ __html: !morescholarship?scholarshipdetail?.description.slice(0,500)+'...':scholarshipdetail?.description }}>
                {/* {!morescholarship?scholarshipdetail?.description?.replace(/<[^>]*>/g, '').slice(0,500)+'...':scholarshipdetail?.description?.replace(/<[^>]*>/g, '')} */}
              </div>}
              <div className="view" onClick={()=>setmorescholarship(!morescholarship)}>
                <span>{`View ${morescholarship?'Less':'More'}`} </span>
                <i className={`fa-solid fa-chevron-${morescholarship?'up':'down'}`} style={{display:'inline-block'}}> </i>
              </div>
          </div>
        </div>
      }
      <div className="other" id="other" style={{padding:'50px 0'}}>

      </div>
    </div>
  )
}

export default DetailMainContent
