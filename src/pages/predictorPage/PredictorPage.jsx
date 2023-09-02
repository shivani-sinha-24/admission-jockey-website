import React, { useState } from 'react'
import './PredictorPage.css'
import PredictorNav from '../../components/PredictorNav/PredictorNav'
import PredictorMainContent from '../../components/PredictorMainContent/PredictorMainContent'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PredictorPage = ({setSelectedCourse}) => {

  const navigate = useNavigate()
  const [step,setStep] = useState(1)

  const [degree,setDegree] = useState('')
  const [degreeErr,setDegreeErr] = useState(false)

  const [course,setcourse] = useState('')
  const [courseErr,setcourseErr] = useState(false)

  const [working,setworking] = useState('')
  const [workingErr,setworkingErr] = useState(false)

  const [hours,sethours] = useState('')
  const [hoursErr,sethoursErr] = useState(false)
  
  const [budget,setbudget] = useState('')
  const [budgetErr,setbudgetErr] = useState(false)
  
  const [emi,setemi] = useState('')
  const [emiErr,setemiErr] = useState(false)
  
  const [priority,setpriority] = useState('')
  const [priorityErr,setpriorityErr] = useState(false)
  
  const [qualification,setqualification] = useState('')
  const [qualificationErr,setqualificationErr] = useState(false)
  
  const [score,setscore] = useState('')
  const [scoreErr,setscoreErr] = useState(false)

  const [reason,setreason] = useState('')
  const [reasonErr,setreasonErr] = useState(false)

  const [rotate,setRotate] = useState(false)
  
  const validationSchema = Yup.object().shape({
    gender: Yup.string().required('Please select a gender'),
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Invalid email address').required('Please enter your email address'),
    mobile: Yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number').required('Please enter your mobile number'),
    dob: Yup.date().required('Please select your date of birth'),
    state: Yup.string().required('Please enter your state'),
    city: Yup.string().required('Please enter your city'),
  });

  const formik = useFormik({
    initialValues: {
      gender: '',
      name: '',
      email: '',
      mobile: '',
      dob: '',
      state: '',
      city: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      values = {...values, degree, course, working, hours, budget, emi, priority, qualification, score, reason}
      axios.post(`${import.meta.env.VITE_BASE_URL}/createPrecictQueryList`,values)
      .then(res=>{
        setSelectedCourse(res.data.query.course);
        navigate('/search?course='+res.data.query.course)
      })
      .catch(err=>console.log(err))
    },
  });

  const reset = ()=>{
    setRotate(true);
    setDegree("");
    setcourse('');
    setworking('');
    sethours('');
    setbudget('');
    setemi('');
    setpriority('');
    setqualification('');
    setscore('');
    setreason('');
    setDegreeErr("");
    setcourseErr('');
    setworkingErr('');
    sethoursErr('');
    setbudgetErr('');
    setemiErr('');
    setpriorityErr('');
    setqualificationErr('');
    setscoreErr('');
    setreasonErr('');
    formik.resetForm();
    setStep(1);
    setTimeout(() => {
      setRotate(false)
    }, 300);
  }
  
  return (
    <div className='predictor-page'>
        <PredictorNav reset={reset} rotate={rotate}/>
        <PredictorMainContent
          step={step}
          setStep={setStep}
          degree={degree}
          setDegree={setDegree}
          course={course}
          setcourse={setcourse}
          working={working}
          setworking={setworking}
          hours={hours}
          sethours={sethours}
          budget={budget}
          setbudget={setbudget}
          emi={emi}
          setemi={setemi}
          priority={priority}
          setpriority={setpriority}
          qualification={qualification}
          setqualification={setqualification}
          score={score}
          setscore={setscore}
          reason={reason}
          setreason={setreason}
          degreeErr={degreeErr}
          setDegreeErr={setDegreeErr}
          courseErr={courseErr}
          setcourseErr={setcourseErr}
          workingErr={workingErr}
          setworkingErr={setworkingErr}
          hoursErr={hoursErr}
          sethoursErr={sethoursErr}
          budgetErr={budgetErr}
          setbudgetErr={setbudgetErr}
          emiErr={emiErr}
          setemiErr={setemiErr}
          priorityErr={priorityErr}
          setpriorityErr={setpriorityErr}
          qualificationErr={qualificationErr}
          setqualificationErr={setqualificationErr}
          scoreErr={scoreErr}
          setscoreErr={setscoreErr}
          reasonErr={reasonErr}
          setreasonErr={setreasonErr}
          formik={formik}
        />
    </div>
  )
}

export default PredictorPage
