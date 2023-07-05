import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const eye = <i className="fa-solid fa-eye"></i>
    const closeeye = <i className="fa-solid fa-eye-slash"></i>
    const [ Userid , setUserid] = useState("")
    const [Password , setPassword] = useState("")
    const [ Fill , setFill] = useState("")
    const [ Passworderror , setPassworderror] = useState("")
    const [Type , setType] = useState("password")
    const [ Show , setShow ] = useState(eye)
    const navigate = useNavigate()

   
    const Emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const passregex = /^[A-Za-z0-9!@#$%^&*_]{3,20}$/
    
    let userdata = {
        email:Userid , 
        password : Password
    }
     
    
    function Change (){
        if(Type=="password"){
            setType("text")
            setShow(closeeye)
        }
        else{
            setType("password")
            setShow(eye)
        }

    }



    // function handlesubmit (e){
    //     e.preventDefault()
    // if(Userid.length===0){
    //     setFill("this field is required")
    // }
    // else{
    //     setFill("")
    // }
    // if(Password.length===0){
    //     setPassworderror("this field is required")
    // }
    // else{
    //     setPassworderror("")
    // }

    // if(Userid.length>0 && Password.length>0 ){
    //    if(Userid.match(Emailregex)){
    //       if(Password.match(passregex)){
    //         console.log(userdata)
    //       }
    //    }
    // }
        
    // }

    function handlesubmit(e) {
        e.preventDefault();
      
        if (Userid.length === 0) {
          setFill("This field is required");
        } else {
          setFill("");
        }
      
        if (Password.length === 0) {
          setPassworderror("This field is required");
        } else {
          setPassworderror("");
        }
      
        if (Userid.length > 0 && Password.length > 0) {
          if (Userid.match(Emailregex)) {
            if (Password.match(passregex)) {
              axios.post(`${import.meta.env.VITE_BASE_URL}/userLogin` , userdata).then((res)=>{
                console.log(res.data.data.token)
                sessionStorage.setItem("token" , res.data.data.token)
                navigate("/")
              }).catch(()=>{
                console.log("error aa gyii")
              })
              console.log(userdata)
            }
          }
        }
      }
      
      
      
      
      
      
      
      
  return (
    <>
    
    <div>
        <form  onSubmit={handlesubmit}>
             <input type="text"  placeholder="Enter Your Mail" value={Userid}
              onChange={(e)=>{setUserid(e.target.value)}}/>

              <p>{Fill}</p>
             <input type={Type} placeholder='Enter your Password 'value={Password}
              onChange={(e)=>{setPassword(e.target.value)}}/>
              <span onClick={Change}>{Show}</span>
              <p>{Passworderror}</p>
              <button type='submit'>Login</button>
              <a href="">Forgot Password?</a>
        </form>
    </div>
    <div>
        <button onClick={()=>{navigate("/Signin")}}>Create New Account</button>
    </div>
    
    </>
  )
}

export default Login