import React, { useEffect, useState } from 'react'
import './PredictorMainContent.css'
// import { courseType,pgCourses,ugCourses,executiveEducation,job,doctorate,skilling,advanceDiploma} from '../../data/predictorData/predictorData'
import { useSelector } from 'react-redux'

const PredictorMainContent = ({step,setStep,degree,setDegree,degreeErr,setDegreeErr,course,courseErr,setcourseErr,setcourse,working,setworking,workingErr,setworkingErr,hours,sethours,hoursErr,sethoursErr,budget,setbudget,budgetErr,setbudgetErr,emi,setemi,emiErr,setemiErr,priority,setpriority,priorityErr,setpriorityErr,qualification,setqualification,qualificationErr,setqualificationErr,score,setscore,scoreErr,setscoreErr,reason,setreason,reasonErr,setreasonErr,formik}) => {
  
  const college = useSelector(state=>state.property.property.colleges)

  let courses = useSelector(state=>state?.university?.universityCourses).map(course=>{
    if(course.type==degree ){ return course?.name}
  } ).filter(value => value !== undefined && value !== null);

  let degreeType = useSelector(state=>state?.university?.universityCourses).map(course=>course.type).filter(value => value !== undefined && value !== null);
  const filteredcollege = useSelector(state=>state?.university?.college)
  let universityCourses = [...new Set(courses)]
  let degreeOptions = [...new Set(degreeType)]
  
  const rOptions = ['Yes','No']
  const wOptions = ['Yes','No']
  const hOptions = ['2-4 Hours','4-8 Hours','8-16 Hours','16+ Hours']
  const bOptions = ['Less than 1 Lakh','1 Lakh to 2.5 Lakh','2.5 Lakh to 4 Lakh','4 Lakh to 6 Lakh','6 Lakh +']
  const eOptions = ['Yes','No']
  const pOptions = ['The Right University + Right Course','Require Higher Position + Higher Salary Package','Less Fee Structure','I only care about the degree']
  const qOptions = ['Postgraduate','College Graduated','Completed 12th','Completed 10th','Diploma Holder']
  const sOptions = ['Below 50%','50% to 80%','Above 80%']
  const genderOptions = [
    {
      gender:'Male',
      img:'https://collegevidya.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmale.b191a968.png&w=32&q=75'
    },
    {
      gender:'Female',
      img:'https://collegevidya.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffemale.38442d0e.png&w=32&q=75'
    },
  ]

  // const [courseOption,setCourseOption] = useState()

  // useEffect(()=>{
  //   if(degree == 'PG Courses'){
  //     setCourseOption(pgCourses)
  //   }else if(degree == 'UG Courses'){
  //     setCourseOption(ugCourses)
  //   }else if(degree == 'Executive Education'){
  //     setCourseOption(executiveEducation)
  //   }else if(degree == 'Job Guarantee'){
  //     setCourseOption(job)
  //   }else if(degree == 'Doctorate/Ph.D.'){
  //     setCourseOption(doctorate)
  //   }else if(degree == 'Skilling & Certificate'){
  //     setCourseOption(skilling)
  //   }else if(degree == 'Advanced Diploma'){
  //     setCourseOption(advanceDiploma)
  //   }
  // },[degree])
  
  const nextStep = (step)=>{
    if(step < 12){
      if( step == 1 ){
        degree ? (setStep(step + 1) && setDegreeErr(false)) : setDegreeErr(true)
      }else if( step == 2 ){
        course ? (setStep(step + 1) && setcourseErr(false)) : setcourseErr(true)
      }else if( step == 3 ){
        working ? (setStep(step + 1) && setworkingErr(false)) : setworkingErr(true)
      }else if( step == 4 ){
        hours ? (setStep(step + 1) && sethoursErr(false)) : sethoursErr(true)
      }else if( step == 5 ){
        budget ? (setStep(step + 1) && setbudgetErr(false)) : setbudgetErr(true)
      }else if( step == 6 ){
        emi ? (setStep(step + 1) && setemiErr(false)) : setemiErr(true)
      }else if( step == 7 ){
        priority ? (setStep(step + 1) && setpriorityErr(false)) : setpriorityErr(true)
      }else if( step == 8 ){
        qualification ? (setStep(step + 1) && setqualificationErr(false)) : setqualificationErr(true)
      }else if( step == 9 ){
        score ? (setStep(step + 1) && setscoreErr(false)) : setscoreErr(true)
      }else if( step == 10){
        reason ? (setStep(step + 1) && setreasonErr(false)) : setreasonErr(true)
      }
    }
  }

  useEffect(()=>{
    degree && ( setDegreeErr( false ) , setStep( step + 1 ) )
    course && ( setcourseErr( false ) , setStep( step + 1 ) )
    working && ( setworkingErr( false ) , setStep( step + 1 ) )
    hours && ( sethoursErr( false ) , setStep( step + 1 ) )
    budget && ( setbudgetErr( false ) , setStep( step + 1 ) )
    emi && ( setemiErr( false ) , setStep( step + 1 ) )
    priority && ( setpriorityErr( false ) , setStep( step + 1 ) )
    qualification && ( setqualificationErr( false ) , setStep( step + 1 ) )
    score && ( setscoreErr( false ) , setStep( step + 1 ) )
    reason && ( setreasonErr( false ) , setStep( step + 1 ) )
  },[degree,course,working,hours,budget,emi,priority,qualification,score,reason])


  return (
    <div className='predictor-main-content'>
      <div className="top">
      <i className="fa-regular fa-clock"></i> Your best match is just 2 minutes away!
      </div>
      <div className="bottom">
        {
          step == 1 &&
          <div className="bottom-step">
            <h1>Which degree are you interested in?</h1>
              { degreeErr && <div className="error">Please select a degree type</div> }
            <div className="degrees">
              {
                degreeOptions?.length>0 &&
                degreeOptions?.map((course,index)=>
                <div className={`degree ${degree === course ? 'option-selected' : ''}`} key={index} onClick={()=>setDegree(course)}>
                    <img src='https://collegevidya.com/_next/static/media/degree.570053f6.svg' alt="degree" />
                    <p>{course}</p>
                  </div>
                )
              }
            </div>
          </div>
        }
        {
          step == 2 &&
          <div className="bottom-step">
            <h1>Which course would you like to pursue?</h1>
            { courseErr && <div className="error">Please select a course</div> }
            <div className="courses">
              {
                // courseOption?.map((courseName,index)=>
                universityCourses?.map((courseName,index)=>
                <div className={`degree ${course === courseName ? 'option-selected' : ''}`} key={index} onClick={()=>setcourse(courseName)}>
                    <img src={'https://d1aeya7jd2fyco.cloudfront.net/icon/mcom.svg'} alt="degree" />
                    <p>{courseName}</p>
                  </div>
                )
              }
            </div>
          </div>
        }
        {
          step == 3 &&
          <div className="bottom-step">
            <h1>Are you Currently Working?</h1>
            { workingErr && <div className="error">Please select an option</div> }
            <div className="static-options">
            {
              wOptions?.length>0 &&
              wOptions?.map((option,index)=>
              <div className={`degree ${working === option ? 'option-selected' : ''}`} key={index} onClick={()=>setworking(option)}>
                  <p>{option}</p>
                </div>
              )
            }
            </div>
          </div>
        }
        {
          step == 4 &&
          <div className="bottom-step">
            <h1>How many Study Hours you can give on the weekly basis?</h1>
            { hoursErr && <div className="error">Please select an option</div> }
            <div className="static-options">
            {
              hOptions?.length>0 &&
              hOptions?.map((option,index)=>
              <div className={`degree ${hours === option ? 'option-selected' : ''}`} key={index} onClick={()=>sethours(option)}>
                  <p>{option}</p>
                </div>
              )
            }
            </div>
          </div>
        }
        {
          step == 5 &&
          <div className="bottom-step">
            <h1>Select Your Budget Options?</h1>
            { budgetErr && <div className="error">Please select an option</div> }
            <div className="static-options">
            {
              bOptions?.length>0 &&
              bOptions?.map((option,index)=>
              <div className={`degree ${budget === option ? 'option-selected' : ''}`} key={index} onClick={()=>setbudget(option)}>
                  <p>{option}</p>
                </div>
              )
            }
            </div>
          </div>
        }
        {
          step == 6 &&
          <div className="bottom-step">
            <h1>Convert Fees into Easy EMIs?</h1>
            { emiErr && <div className="error">Please select an option</div> }
            <div className="static-options">
            {
              eOptions?.length>0 &&
              eOptions?.map((option,index)=>
              <div className={`degree ${emi === option ? 'option-selected' : ''}`} key={index} onClick={()=>setemi(option)}>
                  <p>{option}</p>
                </div>
              )
            }
            </div>
          </div>
        }
        {
          step == 7 &&
          <div className="bottom-step">
            <h1>What matters you the most?</h1>
            { priorityErr && <div className="error">Please select an option</div> }
            <div className="static-options">
            {
              pOptions?.length>0 &&
              pOptions?.map((option,index)=>
              <div className={`degree ${priority === option ? 'option-selected' : ''}`} key={index} onClick={()=>setpriority(option)}>
                  <p>{option}</p>
                </div>
              )
            }
            </div>
          </div>
        }
        {
          step == 8 &&
          <div className="bottom-step">
            <h1>Your Highest Qualification?</h1>
            { qualificationErr && <div className="error">Please select an option</div> }
            <div className="static-options">{
              qOptions?.length>0 &&
              qOptions?.map((option,index)=>
              <div className={`degree ${qualification === option ? 'option-selected' : ''}`} key={index} onClick={()=>setqualification(option)}>
                  <p>{option}</p>
                </div>
              )
            }
            </div>
          </div>
        }
        {
          step == 9 &&
          <div className="bottom-step">
            <h1>Percentage scored in last qualification?</h1>
            { scoreErr && <div className="error">Please select an option</div> }
            <div className="static-options">
            {
              sOptions?.length>0 &&
              sOptions?.map((option,index)=>
              <div className={`degree ${score === option ? 'option-selected' : ''}`} key={index} onClick={()=>setscore(option)}>
                  <p>{option}</p>
                </div>
              )
            }
            </div>
          </div>
        }
        {
          step == 10 &&
          <div className="bottom-step">
            <h1>Looking for Universities through which you can get Placements/Salary Hike/ Promotions?</h1>
            { reasonErr && <div className="error">Please select an option</div> }
            <div className="static-options">
            {
              rOptions?.length>0 &&
              rOptions?.map((option,index)=>
              <div className={`degree ${reason === option ? 'option-selected' : ''}`} key={index} onClick={()=>setreason(option)}>
                  <p>{option}</p>
                </div>
              )
            }
            </div>
          </div>
        }
        {
          step == 11 &&
          <div className="bottom-step last-step">
            <h1>Let's know each other better </h1>
            <form className="degrees" onSubmit={formik.handleSubmit}>    
             <div className='h2'>Compare & Select from 100+</div>
             <div className='desc'>
               <span>Best University for </span><span>Data Science & Analytics</span><span> Course</span>
             </div>
             <div className="desc2">
               <div>
                 <i className="fa-solid fa-circle-check"></i>
                 <span>&nbsp;No-Cost EMI From</span><span>&nbsp; ₹4,999/-</span>
               </div>
               <div>
                 <i className="fa-solid fa-circle-check"></i>
                 <span>&nbsp;100% Placement Assistance</span>
               </div>
             </div>
             <div className="gender-option">
              {genderOptions.map((option, index) => (
                <div
                  className={`option ${formik.values.gender === option.gender ? 'option-selected' : ''}`}
                  key={index}
                  onClick={() => formik.setFieldValue('gender', option.gender)}
                >
                  <img src={option.img} alt="" />
                  <div className="gender">{option.gender}</div>
                </div>
              ))}
            </div>
            {formik.touched.gender && formik.errors.gender && <div className="gender-err">{formik.errors.gender}</div>}
              <div className="input-container">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Enter your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name} 
                />
                {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
              </div>
              <div className="input-container">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="Enter your Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email} 
                />
                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
              </div>
              <div className="input-container ">
                <label htmlFor="">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  placeholder="Enter your Mobile Number" 
                  pattern="[0-9]{10}"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile} 
                />
                {formik.touched.mobile && formik.errors.mobile ? <div className="error">{formik.errors.mobile}</div> : null}
              </div>
              <div className="input-container ">
                <label htmlFor="">Date of Birth</label>
                <input 
                  type="date" 
                  id="dob" 
                  name="dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob} 
                />
                {formik.touched.dob && formik.errors.dob ? <div className="error">{formik.errors.dob}</div> : null}
              </div> 
              <div className="input-container ">
                <label htmlFor="state">State</label>
                <input 
                  type="text" 
                  name="state" 
                  id="state" 
                  placeholder="Enter your State"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state} 
                />
                {formik.touched.state && formik.errors.state ? <div className="error">{formik.errors.state}</div> : null}
              </div>
              <div className="input-container ">
                <label htmlFor="city">City</label>
                <input 
                  type="text" 
                  name="city" 
                  id="city" 
                  placeholder="Enter your City"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city} 
                />
                {formik.touched.city && formik.errors.city ? <div className="error">{formik.errors.city}</div> : null}
              </div>
            </form>            
          </div>
        }
        <div className="bottom-button">
          {       
            step > 1 &&   
            <button className='prev' onClick={()=> step > 1 && setStep( step - 1 )}>Previous</button>
          }          
          {
            step == 11
            ?
            <button className='next' onClick={()=>{formik.handleSubmit()}}>Submit</button>
            :
            <button className='next' onClick={()=>nextStep(step)}>Next</button>
          }
        </div>
      </div>
    </div>
  )
}

export default PredictorMainContent
