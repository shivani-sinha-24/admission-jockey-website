import React, { useEffect } from 'react'
import './CompareMainContent.css'
import { useDispatch } from 'react-redux';

const CompareMainContent = ({courseArray1,courseArray2,courseArray3,courseArray4,clgIndex,setClgIndex,compareArray,setCompareArray,isCompareOpen, setIsCompareOpen,compareMultiClg,setCompareMultiClg}) => {

  const dispatch = useDispatch()
   // Function to mark a college as undefined in compareArray
   const removeCollege = (index) => {
    const updatedCompareArray = [...compareArray];
    updatedCompareArray[index] = undefined;
    setCompareArray(updatedCompareArray);
  };


  
  return (
    <div className='comapre-main-content'>
      <div className="college-detail">
        <div className="clg">
          {
            compareArray[0]!= undefined
            ?
            <div className="college-info">
              <div className="top">
                <div className="left">
                  <div>{compareArray[0]?.name.length > 35 ? compareArray[0]?.name.substring(0, 35) + '...' : compareArray[0]?.name}</div>
                  <div><i className="fa-solid fa-location-dot"></i>{compareArray[0]?.property_district}</div>
                </div>
                <div className="right" onClick={()=>{removeCollege(0)}}><i className="fa-regular fa-circle-xmark"></i></div>
              </div>
              <div className="middle" style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${compareArray[0]?.image})`,}}>
                <div className="logo" style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${compareArray[0]?.logo})`,}}></div>
              </div>
              <div className="bottom">
                <div className="detail">
                <div className="b-left">Established Year</div>
                <div className="b-right">{compareArray[0]?.est_year}</div>
                </div>
                <div className="detail">
                <div className="b-left">Ownership</div>
                <div className="b-right">{compareArray[0]?.college_type}</div>
                </div>
              </div>
            </div>
            :
            <div className="add-new" onClick={()=>{setCompareMultiClg(false);setClgIndex(0);setIsCompareOpen(true)}}>
              <div className="add-icon">
                <i className="fa-solid fa-plus"></i>
              </div>
              <div className="text">Add College</div>
            </div>
          }
        </div>
        <div className="clg">
          {
            compareArray[1]!= undefined
            ?
            <div className="college-info">
              <div className="top">
                <div className="left">
                  <div>{compareArray[1]?.name.length > 35 ? compareArray[1]?.name.substring(0, 35) + '...' : compareArray[1]?.name}</div>
                  <div><i className="fa-solid fa-location-dot"></i>{compareArray[1]?.property_district}</div>
                </div>
                <div className="right" onClick={()=>{removeCollege(1)}}><i className="fa-regular fa-circle-xmark"></i></div>
              </div>
              <div className="middle" style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${compareArray[1]?.image})`,}}>
                <div className="logo" style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${compareArray[1]?.logo})`,}}></div>
              </div>
              <div className="bottom">
                <div className="detail">
                <div className="b-left">Established Year</div>
                <div className="b-right">{compareArray[1]?.est_year}</div>
                </div>
                <div className="detail">
                <div className="b-left">Ownership</div>
                <div className="b-right">{compareArray[1]?.college_type}</div>
                </div>
              </div>
            </div>
            :
            <div className="add-new" onClick={()=>{setCompareMultiClg(false);setClgIndex(1);setIsCompareOpen(true)}}>
              <div className="add-icon">
                <i className="fa-solid fa-plus"></i>
              </div>
              <div className="text">Add College</div>
            </div>
          }
        </div>
        <div className="clg">
          {
            compareArray[2]!= undefined
            ?
            <div className="college-info">
              <div className="top">
                <div className="left">
                  <div>{compareArray[2]?.name.length > 35 ? compareArray[2]?.name.substring(0, 35) + '...' : compareArray[2]?.name}</div>
                  <div><i className="fa-solid fa-location-dot"></i>{compareArray[2]?.property_district}</div>
                </div>
                <div className="right" onClick={()=>{removeCollege(2)}}><i className="fa-regular fa-circle-xmark"></i></div>
              </div>
              <div className="middle" style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${compareArray[2]?.image})`,}}>
                <div className="logo" style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${compareArray[2]?.logo})`,}}></div>
              </div>
              <div className="bottom">
                <div className="detail">
                <div className="b-left">Established Year</div>
                <div className="b-right">{compareArray[2]?.est_year}</div>
                </div>
                <div className="detail">
                <div className="b-left">Ownership</div>
                <div className="b-right">{compareArray[2]?.college_type}</div>
                </div>
              </div>
            </div>
            :
            <div className="add-new" onClick={()=>{setCompareMultiClg(false);setClgIndex(2);setIsCompareOpen(true)}}>
              <div className="add-icon">
                <i className="fa-solid fa-plus"></i>
              </div>
              <div className="text">Add College</div>
            </div>
          }
        </div>
        <div className="clg">
          {
            compareArray[3]!= undefined
            ?
            <div className="college-info">
              <div className="top">
                <div className="left">
                  <div>{compareArray[3]?.name.length > 35 ? compareArray[3]?.name.substring(0, 35) + '...' : compareArray[3]?.name}</div>
                  <div><i className="fa-solid fa-location-dot"></i>{compareArray[3]?.property_district}</div>
                </div>
                <div className="right" onClick={()=>{removeCollege(3)}}><i className="fa-regular fa-circle-xmark"></i></div>
              </div>
              <div className="middle" style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${compareArray[3]?.image})`,}}>
                <div className="logo" style={{backgroundImage: `url(${import.meta.env.VITE_BASE_URL}/${compareArray[3]?.logo})`,}}></div>
              </div>
              <div className="bottom">
                <div className="detail">
                <div className="b-left">Established Year</div>
                <div className="b-right">{compareArray[3]?.est_year}</div>
                </div>
                <div className="detail">
                <div className="b-left">Ownership</div>
                <div className="b-right">{compareArray[3]?.college_type}</div>
                </div>
              </div>
            </div>
            :
            <div className="add-new" onClick={()=>{setCompareMultiClg(false);setClgIndex(3);setIsCompareOpen(true)}}>
              <div className="add-icon">
                <i className="fa-solid fa-plus"></i>
              </div>
              <div className="text">Add College</div>
            </div>
          }
        </div>
      </div>
      <div className="heading">Course Details</div>
      <div className="course-detail">
        <div className="clg">
          {
            compareArray[0]!=undefined &&
            <>
            <div className="top">
              <div className="detail">
                <div className="left">Course Credential</div>
                <div className="right">Degree</div>
              </div>
              <div className="detail">
                <div className="left">Course Level</div>
                <div className="right">12th</div>
              </div>
              <div className="detail">
                <div className="left">Duration</div>
                <div className="right">4 Year</div>
              </div>
              <div className="detail">
                <div className="left">Mode</div>
                <div className="right">Full Time</div>
              </div>
            </div>
            <div className="bottom">
              {
                courseArray1?.length>0 &&
                courseArray1?.map(course=>
                  <div className="detail">
                    
                    <div className="left">{course?.full_name}</div>
                    <div className="right">₹{course?.fees} (1st Year Fees)</div>
                  </div>
                )
              }
            </div>
            </>
          }
        </div>
        <div className="clg">
          {
            compareArray[1]!=undefined &&
            <>
            <div className="top">
              <div className="detail">
                <div className="left">Course Credential</div>
                <div className="right">Degree</div>
              </div>
              <div className="detail">
                <div className="left">Course Level</div>
                <div className="right">12th</div>
              </div>
              <div className="detail">
                <div className="left">Duration</div>
                <div className="right">4 Year</div>
              </div>
              <div className="detail">
                <div className="left">Mode</div>
                <div className="right">Full Time</div>
              </div>
            </div>
            <div className="bottom">
              {
                courseArray2?.length>0 &&
                courseArray2?.map(course=>
                  <div className="detail">
                    
                    <div className="left">{course?.full_name}</div>
                    <div className="right">₹{course?.fees} (1st Year Fees)</div>
                  </div>
                )
              }
            </div>
            </>
          }
        </div>
        <div className="clg">
          {
            compareArray[2]!=undefined &&
            <>
            <div className="top">
              <div className="detail">
                <div className="left">Course Credential</div>
                <div className="right">Degree</div>
              </div>
              <div className="detail">
                <div className="left">Course Level</div>
                <div className="right">12th</div>
              </div>
              <div className="detail">
                <div className="left">Duration</div>
                <div className="right">4 Year</div>
              </div>
              <div className="detail">
                <div className="left">Mode</div>
                <div className="right">Full Time</div>
              </div>
            </div>
            <div className="bottom">
              {
                courseArray3?.length>0 &&
                courseArray3?.map(course=>
                  <div className="detail">
                    
                    <div className="left">{course?.full_name}</div>
                    <div className="right">₹{course?.fees} (1st Year Fees)</div>
                  </div>
                )
              }
            </div>
            </>
          }
        </div>
        <div className="clg">
          {
            compareArray[3]!=undefined &&
            <>
            <div className="top">
              <div className="detail">
                <div className="left">Course Credential</div>
                <div className="right">Degree</div>
              </div>
              <div className="detail">
                <div className="left">Course Level</div>
                <div className="right">12th</div>
              </div>
              <div className="detail">
                <div className="left">Duration</div>
                <div className="right">4 Year</div>
              </div>
              <div className="detail">
                <div className="left">Mode</div>
                <div className="right">Full Time</div>
              </div>
            </div>
            <div className="bottom">
              {
                courseArray4?.length>0 &&
                courseArray4?.map(course=>
                  <div className="detail">
                    
                    <div className="left">{course?.full_name}</div>
                    <div className="right">₹{course?.fees} (1st Year Fees)</div>
                  </div>
                )
              }
            </div>
            </>
          }
        </div>
      </div>
      <div className="heading">Student Rating & Reviews</div>
      <div className="review-detail">
        <div className="clg">
          <div className="top">
            <p>3.5</p>
            <p>out of 5</p>
          </div>
          <div className="bottom">
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'black'}}></i>
          </div>
        </div>
        <div className="clg">
          <div className="top">
            <p>3.5</p>
            <p>out of 5</p>
          </div>
          <div className="bottom">
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'black'}}></i>
          </div>
        </div>
        <div className="clg">
          <div className="top">
            <p>3.5</p>
            <p>out of 5</p>
          </div>
          <div className="bottom">
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'black'}}></i>
          </div>
        </div>
        <div className="clg">
          <div className="top">
            <p>3.5</p>
            <p>out of 5</p>
          </div>
          <div className="bottom">
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'yellow'}}></i>
            <i className="fa-solid fa-graduation-cap" style={{color:'black'}}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareMainContent
